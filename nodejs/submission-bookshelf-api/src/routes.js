const {
    addBookHandler,
} = require('./handler');

const routes = [
    // Simpan
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
];

module.exports = routes;
