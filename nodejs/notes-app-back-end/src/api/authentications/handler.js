const ClientError = require("../../exceptions/ClientError");

class AuthenticationsHandler {
    constructor(authenticationsService, usersService, tokenManager, validator) {
        this._authenticationsService = authenticationsService;
        this._usersService = usersService;
        this._tokenManager = tokenManager;
        this._validator = validator;

        // Jangan lupa bind seluruh fungsi handler yg sudah dibuat
        this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
        this.putAuthenticationHandler = this.putAuthenticationHandler.bind(this);
        this.deleteAuthenticationHandler = this.deleteAuthenticationHandler.bind(this);
    }

    async postAuthenticationHandler(request, h) {
        try {
            /* Ketahuilah bahwa pada handler ini proses login terjadi. Langkah pertama yang harus kita lakukan adalah memverifikasi apakah payload request sudah sesuai harapan kita, yaitu memiliki properti string username dan password.

            Dengan begitu, validasi dulu payload dengan menggunakan fungsi validatePostAuthenticationPayload melalui this._validator */
            this._validator.validatePostAuthenticationPayload(request.payload);

            /* Setelah request.payload melalui proses validasi, aman untuk kita menggunakan payload tersebut. Sekarang, dapatkan nilai username dan password dari payload, dan gunakan nilainya tersebut untuk memeriksa apakah kredensial yang dikirimkan pada request sesuai.

            Gunakan this._usersService.verifyUserCredential untuk memeriksa kredensial yang ada pada request.payload. */
            const { username, password } = request.payload;
            const id = await this._usersService.verifyUserCredential(username, password);   // Karena fungsi verifyUserCredential mengembalikan nilai id dari user, maka tampung nilai tersebut pada variabel id.

            // Membuat accessToken & refreshToken dgn fungsi generate 
            const accessToken = this._tokenManager.generateAccessToken({ id });
            const refreshToken = this._tokenManager.generateRefreshToken({ id });

            /* Setelah accessToken dan refreshToken terbuat, kita akan gunakan keduanya sebagai nilai data yang nantinya dibawa oleh body respons. Namun sebelum itu, kita perlu menyimpan dulu refreshToken ke database agar server mengenali refreshToken bila pengguna ingin memperbarui accessToken.

            Silakan gunakan fungsi this._authenticationsService.addRefreshToken untuk menyimpan refreshToken. */
            await this._authenticationsService.addRefreshToken(refreshToken);

            /* Terakhir, kita tinggal kembalikan request dengan respons yang membawa accessToken dan refreshToken di data body. */
            const response = h.response({
                status: 'success',
                message: 'Authentication berhasil ditambahkan',
                data: {
                    accessToken,
                    refreshToken,
                },
            });
            response.code(201);
            return response;

        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    async putAuthenticationHandler(request, h) {
        try {
            /* Ketahuilah bahwa, fungsi handler ini akan dijalankan ketika ada request ke PUT /authentications, di mana request tersebut dilakukan untuk memperbarui access token dengan melampirkan refresh token pada payload request. 

            Jadi langkah awal yang kita perlu lakukan adalah memastikan payload request mengandung properti refreshToken yang bernilai string. Untuk melakukannya, gunakan fungsi validatePutAuthenticationPayload melalui this._validator. */

            this._validator.validatePutAuthenticationPayload(request.payload);

            // Setelah request.payload divalidasi, silakan dapatkan nilai refreshToken pada request.payload dan verifikasi refreshToken baik dari sisi database maupun signature token
            const { refreshToken } = request.payload;
            await this._authenticationsService.verifyRefreshToken(refreshToken);
            const { id } = this._tokenManager.verifyRefreshToken(refreshToken);

            /* Lihat kode dalam memverifikasi signature refresh token, di sana kita menampung nilai id dari objek payload yang dikembalikan this._tokenManager.verifyRefreshToken. Nilai id tersebut nantinya kita akan gunakan dalam membuat accessToken baru agar identitas pengguna tidak berubah.

            Setelah refreshToken lolos dari verifikasi database dan signature, sekarang kita bisa secara aman membuat accessToken baru dan melampirkannya sebagai data di body respons. */
            const accessToken = this._tokenManager.generateAccessToken({ id });
            return {
                status: 'success',
                message: 'Access Token berhasil diperbarui',
                data: {
                    accessToken,
                },
            };

        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    async deleteAuthenticationHandler(request, h) {
        try {
            /* Fungsi handler ini akan dijalankan ketika ada permintaan ada request ke DELETE /authentications, di mana request tersebut bertujuan untuk menghapus refresh token yang dimiliki pengguna pada database */

            /* Seperti biasa, sebagai langkah awal kita perlu validasi dulu request.payload, pastikan permintaan membawa payload yang berisi refreshToken. Untuk validasinya, kita gunakan fungsi validateDeleteAuthenticationsPayload yang dimiliki this._validator */
            this._validator.validateDeleteAuthenticationPayload(request.payload);

            /* Setelah request.payload divalidasi, kita bisa dapatkan nilai refreshToken dari request payload untuk kemudian menghapus token tersebut dari database.

            Namun, sebelum menghapusnya kita perlu memastikan refreshToken tersebut ada di database. Caranya, gunakan fungsi this._authenticationsService.verifyRefreshToken. */
            const { refreshToken } = request.payload;
            await this._authenticationsService.verifyRefreshToken(refreshToken);

            /* Setelah proses verifikasi refreshToken selesai, kita bisa lanjut menghapusnya dari database menggunakan fungsi this._authenticationsService.deleteRefreshToken. */
            await this._authenticationsService.deleteRefreshToken(refreshToken);

            return {
                status: 'success',
                message: 'Refresh token berhasil dihapus',
            };

        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }

            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

}

module.exports = AuthenticationsHandler;