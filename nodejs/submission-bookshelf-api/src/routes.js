const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
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

];

module.exports = routes;
