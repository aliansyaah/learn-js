const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    let finished = false;

    if (pageCount === readPage) {
        finished = true;
    }
    // console.log(finished);
    // console.log(pageCount === readPage);

    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, finished, reading, id, insertedAt, updatedAt,
    };

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });

        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};

/* const getAllBooksHandler = () => ({
    status: 'success',
    data: {
        books,
    },
}); */

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    if (name) {
        console.log(name);
        resultBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));

        const response = h.response({
            status: 'success',
            data: {
                books: resultBooks.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                }))
            },
        });

        response.code(200);
        return response;
    }

    if (reading) {
        console.log(reading);
        resultBooks = books.filter((book) => book.reading === !!Number(reading));

        const response = h.response({
            status: 'success',
            data: {
                books: resultBooks.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                }))
            },
        });

        response.code(200);
        return response;
    }

    if (finished) {
        console.log(finished);
        resultBooks = books.filter((book) => book.finished === !!Number(finished));

        const response = h.response({
            status: 'success',
            data: {
                books: resultBooks.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                }))
            },
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'success',
        data: {
            books: books.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            }))
        },
    });

    response.code(200);
    return response;

};

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const book = books.filter((n) => n.id === bookId)[0];
    console.log(book);

    if (book !== undefined) {
        /* return {
            status: 'success',
            data: {
                book,
            },
        }; */
        const response = h.response({
            status: 'success',
            data: {
                book,
            },
        }).code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
};

const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const updatedAt = new Date().toISOString();
    let finished = false;

    if (pageCount === readPage) {
        finished = true;
    }
    // console.log(finished);
    // console.log(pageCount === readPage);

    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }
    
    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });

    response.code(404);
    return response;
};

const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
};
