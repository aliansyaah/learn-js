/* 
    Folder notes dan 3 berkas di dalamnya adalah Hapi plugin.
    Plugin notes ini akan bertanggung jawab untuk menangani setiap permintaan yang mengarah ke url /notes.

    Untuk request handling akan disimpan pada handler.js, untuk masalah routing akan disimpan di dalam routes.js, dan untuk pluginnya sendiri akan disimpan pada index.js.
*/

// Impor berkas handler.js agar NotesHandler dapat digunakan
const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'notes',
    version: '1.0.0',

    // Parameter fungsi ini adalah server dan objek options yang menampung service
    register: async (server, { service }) => {
        // Membuat instance dari class NotesHandler dengan nama notesHandler
        const notesHandler = new NotesHandler(service);

        // Daftarkan routes yang sudah kita buat pada server Hapi
        // Caranya di dalam method server.route, panggil fungsi routes dan berikan notesHandler sebagai nilai handler-nya
        server.route(routes(notesHandler));
    },
};