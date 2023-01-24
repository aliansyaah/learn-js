// mengimpor dotenv dan menjalankan konfigurasinya
require('dotenv').config();

const Hapi = require('@hapi/hapi');
// const routes = require('./routes');

// Notes
const notes = require('./api/notes');
// const NotesService = require('./services/inMemory/NotesService');
const NotesService = require('./services/postgres/NotesService');
const NotesValidator = require('./validator/notes');

// Users
const users = require('./api/users');
const UsersService = require('./services/postgres/UsersService');
const UsersValidator = require('./validator/users');

// Authentications
const authentications = require('./api/authentications');
const AuthenticationsService = require('./services/postgres/AuthenticationsService');
const TokenManager = require('./tokenize/TokenManager');
const AuthenticationsValidator = require('./validator/authentications');

const init = async () => {
    const notesService = new NotesService();
    const usersService = new UsersService();
    const authenticationsService = new AuthenticationsService();

    const server = Hapi.server({
        // port: 5000,
        // host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // server.route(routes);

    // Daftarkan plugin notes dengan options.service bernilai notesService menggunakan perintah await server.register tepat sebelum kode await server.start().
    // Ubah cara registrasi plugin notes dari objek literals menjadi arrays. Tujuannya, agar kita dapat mendaftarkan lebih dari satu plugin sekaligus.
    await server.register([
        {
            plugin: notes,
            options: {
                service: notesService,
                validator: NotesValidator,
            }
        },
        {
            plugin: users,
            options: {
                service: usersService,
                validator: UsersValidator,
            },
        },
        /* Daftarkan plugin authentications pada Hapi server dengan membawa authenticationsService, usersService, TokenManager, dan AuthenticationsValidator sebagai nilai options */
        {
            plugin: authentications,
            options: {
                authenticationsService,
                usersService,
                tokenManager: TokenManager,
                validator: AuthenticationsValidator,
            },
        },
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
