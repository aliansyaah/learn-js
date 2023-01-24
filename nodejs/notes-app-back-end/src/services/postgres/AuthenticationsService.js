const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');

/* 
    AuthenticationService ini akan bertanggung jawab dalam menangani pengelolaan data refresh token pada tabel authentications melalui fungsi-fungsi:

    1. Memasukkan refresh token (addRefreshToken).
    2. Memverifikasi atau memastikan refresh token ada di database (verifyRefreshToken).
    3. Menghapus refresh token (deleteRefreshToken).
*/
class AuthenticationsService {
    constructor() {
        // Inisialisasi properti this._pool dgn nilai instance pg.Pool
        this._pool = new Pool();
    }

    async addRefreshToken(token) {
        const query = {
            text: 'INSERT INTO authentications VALUES($1)',
            values: [token],
        };

        await this._pool.query(query);
    }

    async verifyRefreshToken(token) {
        const query = {
            text: 'SELECT token FROM authentications WHERE token = $1',
            values: [token],
        };

        const result = await this._pool.query(query);

        /* Cek nilai result.rows.length, bila nilainya kurang dari 1 itu berarti token yang diverifikasi tidaklah valid, karena ia tidak ditemukan di database. Bila ini terjadi, maka bangkitkan InvariantError dengan pesan "Refresh token tidak valid" */
        if (!result.rows.length) {
            throw new InvariantError('Refresh token tidak valid');
        }
    }

    async deleteRefreshToken(token) {
        /* Tuliskan query untuk menghapus refresh token pada tabel authentications berdasarkan token yang dibawa di parameter. Kemudian eksekusi query dengan fungsi this._pool.query */
        const query = {
            text: 'DELETE FROM authentications WHERE token = $1',
            values: [token],
        };
        await this._pool.query(query);
    }
}

module.exports = AuthenticationsService;