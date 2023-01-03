const notesPlugin = require('./notesPlugin');
const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server();

    // registrasi satu plugin
    await server.register({
        plugin: notesPlugin,
        options: { notes: [] },
    });

    await server.start();
    
    // console.log(`Server berjalan pada ${server.info.uri}`);
    console.log(server);
};

init();

/* FYI: belum jalan */