const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require('./handler');

const routes = [
    // Simpan
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },

    // Lihat semua
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },

    // Lihat detail
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },

    // Edit
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },

    // Hapus
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;
