/* 
    Berkas NotesService.js bertanggung jawab untuk mengelola resource notes yang disimpan pada memory (array). 
*/

const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class NotesService {
    constructor() {
        this._notes = [];
    }

    addNote({ title, body, tags }) {
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const newNote = {
            title, tags, body, id, createdAt, updatedAt,
        };

        this._notes.push(newNote);

        /* Untuk memastikan newNote masuk ke dalam this._notes, kita bisa mengeceknya menggunakan fungsi filter untuk mencari berdasarkan id catatan yang baru saja dibuat (newNote), kemudian menyimpan hasilnya dalam variabel isSuccess */
        const isSuccess = this._notes.filter((note) => note.id === id).length > 0;

        // Lakukan pengecekan pada variabel isSuccess
        if (!isSuccess) {
            throw new InvariantError('Catatan gagal ditambahkan');
        }

        // Jika isSuccess bernilai true, kembalikan fungsi dengan nilai id catatan baru
        return id;
    }

    getNotes() {
        return this._notes;
    }

    getNoteById(id) {
        // Untuk mendapatkan note berdasarkan id, kita bisa manfaatkan fungsi filter.
        const note = this._notes.filter((n) => n.id === id)[0];

        /* Lakukan pengecekan pada variabel note. Bila note tidak ditemukan, maka bangkitkan Error. Selain itu, kembalikan fungsi dengan nilai note. */
        if (!note) {
            throw new NotFoundError('Catatan tidak ditemukan');
        }
        return note;
    }

    /* Fungsi editNoteById menerima dua parameter yakni id dan data note terbaru dalam bentuk objek (payload yang akan diambil sebagian field yaitu title, body, tags) */
    editNoteById(id, { title, body, tags }) {
        const index = this._notes.findIndex((note) => note.id === id);

        if (index === -1) {
            throw new NotFoundError('Gagal memperbarui catatan. Id tidak ditemukan');
        }

        const updatedAt = new Date().toISOString();

        this._notes[index] = {
            ...this._notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
    }

    deleteNoteById(id) {
        const index = this._notes.findIndex((note) => note.id === id);

        if (index === -1) {
            throw new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan');
        }
        this._notes.splice(index, 1);
    }
}

/* Jangan lupa ekspor class NotesService agar dapat digunakan pada berkas JavaScript lain */
module.exports = NotesService;