/* 
    Fungsi handler digunakan untuk menangani permintaan dari client yang datang kemudian memberikan respons dan sebaiknya memang hanya sebatas itu. Maksudnya, fungsi handler harus menghindari proses lain yang bukan bagian dari request handling. Contoh, fungsi handler tidak perlu tahu bagaimana cara resource disimpan, cara mendapatkan resource, dan cara-cara lainnya.
*/

const ClientError = require("../../exceptions/ClientError");

class NotesHandler {
    /* Parameter service nantinya akan diberikan nilai instance dari NotesService. Dengan begitu, NotesHandler memiliki akses untuk mengelola resource notes melalui properti this._service. */

    constructor(service, validator) {

        /* Buat properti "_service" dan inisialisasikan nilainya dengan service dari parameter constructor. Penggunaan nama variabel diawali underscore (_) dipertimbangkan sebagai lingkup privat secara konvensi */
        this._service = service;
        this._validator = validator;

        this.postNoteHandler = this.postNoteHandler.bind(this);
        this.getNotesHandler = this.getNotesHandler.bind(this);
        this.getNoteByIdHandler = this.getNoteByIdHandler.bind(this);
        this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
        this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
    }

    /* 
        Karena operasi CRUD dari NotesService skrg berjalan secara asynchronous, maka perlu sedikit ada perubahan di maana fungsi handler juga perlu menerapkan asynchronous.
        Tambahkan keyword "async" pada seluruh fungsi handler & tambahkan keyword "await" di setiap penggunaan fungsi dari service 
    */
    async postNoteHandler(request, h) {
        try {
            this._validator.validateNotePayload(request.payload);
            const { title = 'untitled', body, tags } = request.payload;
            const { id: credentialId } = request.auth.credentials;

            // Untuk proses memasukan catatan baru, kita cukup panggil fungsi this._service.addNote kemudian berikan title, body, dan tags sebagai parameter objek note.

            // Karena fungsi this._service.addNote akan mengembalikan id catatan yang disimpan, maka buatlah variabel noteId untuk menampung nilainya. Ini karena nilai tersebut akan kita gunakan dalam merespons permintaan.

            // const noteId = await this._service.addNote({ title, body, tags });
            const noteId = await this._service.addNote({
                title, body, tags, owner: credentialId,
            });

            // Kita kembalikan fungsi handler dengan respons yang memiliki kode 201.
            // Tambahkan parameter "h" di fungsi handler dan manfaatkanlah untuk membuat respons seperti pada kode lama (agar tidak mengganggu testing di Postman).
            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil ditambahkan',
                data: {
                    noteId,
                },
            });
            response.code(201);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                /* Ingat! Karena this._service.addNote bisa membangkitkan eror ketika catatan gagal dimasukan, maka kita perlu mengantisipasinya dengan menggunakan try .. catch. Mudahnya, Anda bisa membungkus seluruh logic di dalam block try, kemudian untuk block catch, kita kembalikan fungsi handler dengan respons gagal yang memiliki status code 400 dan pesan yang dibawa parameter error. */

                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    async getNotesHandler(request) {
        const { id: credentialId } = request.auth.credentials;
        // const notes = await this._service.getNotes();
        const notes = await this._service.getNotes(credentialId);
        return {
            status: 'success',
            data: {
                notes,
            },
        };
    }

    async getNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            const { id: credentialId } = request.auth.credentials;

            await this._service.verifyNoteOwner(id, credentialId);
            const note = await this._service.getNoteById(id);
            return {
                status: 'success',
                data: {
                    note,
                },
            };
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    async putNoteByIdHandler(request, h) {
        try {
            this._validator.validateNotePayload(request.payload);
            const { id } = request.params;
            const { id: credentialId } = request.auth.credentials;

            await this._service.verifyNoteOwner(id, credentialId);

            // Panggil fungsi editNoteById, masukkan id sbg parameter pertama & request.payload yang akan menyediakan title, body, dan tags untuk objek note baru
            await this._service.editNoteById(id, request.payload);

            return {
                status: 'success',
                message: 'Catatan berhasil diperbarui',
            };
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    async deleteNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            const { id: credentialId } = request.auth.credentials;

            await this._service.verifyNoteOwner(id, credentialId);
            await this._service.deleteNoteById(id);

            return {
                status: 'success',
                message: 'Catatan berhasil dihapus',
            };
        } catch (error) {
            console.log(error);
            // const response = h.response({
            //     status: 'fail',
            //     message: error.message,
            // });
            // response.code(404);
            // return response;

            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

}

// Jangan lupa untuk ekspor class NotesHandler agar dapat digunakan pada berkas JavaScript lain
module.exports = NotesHandler;
