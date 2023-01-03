const Hapi = require('@hapi/hapi');
// const routes = require('./routes');

const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');

const init = async () => {
    const notesService = new NotesService();

    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // server.route(routes);

    // Daftarkan plugin notes dengan options.service bernilai notesService menggunakan perintah await server.register tepat sebelum kode await server.start().
    await server.register({
        plugin: notes,
        options: {
            service: notesService,
        }
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
