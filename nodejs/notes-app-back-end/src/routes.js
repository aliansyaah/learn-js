const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    // Simpan
    {
        method: 'POST',
        path: '/notes',
        // handler: () => {},
        handler: addNoteHandler,
    },

    // Lihat semua
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    // Lihat detail
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    // Edit
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },

    // Hapus
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;
