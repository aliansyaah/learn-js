/* 
    Fungsi handler digunakan untuk menangani permintaan dari client yang datang kemudian memberikan respons dan sebaiknya memang hanya sebatas itu. Maksudnya, fungsi handler harus menghindari proses lain yang bukan bagian dari request handling. Contoh, fungsi handler tidak perlu tahu bagaimana cara resource disimpan, cara mendapatkan resource, dan cara-cara lainnya.
*/

class NotesHandler {
    /* Parameter service nantinya akan diberikan nilai instance dari NotesService. Dengan begitu, NotesHandler memiliki akses untuk mengelola resource notes melalui properti this._service. */

    constructor(service) {

        /* Buat properti "_service" dan inisialisasikan nilainya dengan service dari parameter constructor. Penggunaan nama variabel diawali underscore (_) dipertimbangkan sebagai lingkup privat secara konvensi */
        this._service = service;

        this.postNoteHandler = this.postNoteHandler.bind(this);
        this.getNotesHandler = this.getNotesHandler.bind(this);
        this.getNoteByIdHandler = this.getNoteByIdHandler.bind(this);
        this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
        this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
    }

    postNoteHandler(request, h) {
        try {
            const { title = 'untitled', body, tags } = request.payload;

            // Untuk proses memasukan catatan baru, kita cukup panggil fungsi this._service.addNote kemudian berikan title, body, dan tags sebagai parameter objek note.

            // Karena fungsi this._service.addNote akan mengembalikan id catatan yang disimpan, maka buatlah variabel noteId untuk menampung nilainya. Ini karena nilai tersebut akan kita gunakan dalam merespons permintaan.
            const noteId = this._service.addNote({ title, body, tags });

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
            /* Ingat! Karena this._service.addNote bisa membangkitkan eror ketika catatan gagal dimasukan, maka kita perlu mengantisipasinya dengan menggunakan try .. catch. Mudahnya, Anda bisa membungkus seluruh logic di dalam block try, kemudian untuk block catch, kita kembalikan fungsi handler dengan respons gagal yang memiliki status code 400 dan pesan yang dibawa parameter error. */
            
            const response = h.response({
                status: 'fail',
                message: error.message,
            });
            response.code(400);
            return response;
        }
    }

    getNotesHandler() {
        const notes = this._service.getNotes();
        return {
            status: 'success',
            data: {
                notes,
            },
        };
    }

    getNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            const note = this._service.getNoteById(id);
            return {
                status: 'success',
                data: {
                    note,
                },
            };
        } catch (error) {
            const response = h.response({
                status: 'fail',
                message: error.message,
            });
            response.code(404);
            return response;
        }
    }

    putNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;

            // Panggil fungsi editNoteById, masukkan id sbg parameter pertama & request.payload yang akan menyediakan title, body, dan tags untuk objek note baru
            this._service.editNoteById(id, request.payload);

            return {
                status: 'success',
                message: 'Catatan berhasil diperbarui',
            };
        } catch (error) {
            const response = h.response({
                status: 'fail',
                message: error.message,
            });
            response.code(404);
            return response;
        }
    }

    deleteNoteByIdHandler(request, h) {
        try {
            const { id } = request.params;
            this._service.deleteNoteById(id);
            return {
                status: 'success',
                message: 'Catatan berhasil dihapus',
            };
        } catch (error) {
            console.log(error);
            const response = h.response({
                status: 'fail',
                message: error.message,
            });
            response.code(404);
            return response;
        }
    }
}

// Jangan lupa untuk ekspor class NotesHandler agar dapat digunakan pada berkas JavaScript lain
module.exports = NotesHandler;
