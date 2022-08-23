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
];

module.exports = routes;
