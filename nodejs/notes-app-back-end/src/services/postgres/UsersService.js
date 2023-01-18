const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const NotFoundError = require('../../exceptions/NotFoundError');
const AuthenticationError = require('../../exceptions/AuthenticationError');

class UsersService {
    constructor() {
        this._pool = new Pool();
    }

    async addUser({ username, password, fullname }) {
        // Verifikasi username, pastikan belum terdaftar.
        await this.verifyNewUsername(username);

        // Bila verifikasi lolos, maka masukkan user baru ke database.
        const id = `user-${nanoid(16)}`;

        /*  
            Untuk password, kita tidak akan memasukan password ke database secara mentah-mentah atau plain text. Hal tersebut tidaklah baik karena bila data user di database diretas, maka peretas akan mudah masuk ke sistem karena kredensial bersifat transparan. 

            Best practice dalam menyimpan password di database adalah dengan men-hashing password-nya. Kita hashing passwordnya menggunakan bcrypt.

            Dalam menjalankan proses hash fungsi bcrypt.hash menerima dua parameter, yakni data dan saltRounds. Parameter data merupakan nilai yang ingin di-hash, pada kasus ini adalah password yang diberikan oleh client. Sedangkan parameter saltRounds merupakan sebuah angka yang digunakan oleh algoritma bcrypt untuk menciptakan nilai string yang tidak dapat diprediksi. Nilai 10 merupakan standar dari saltRounds.

            Fungsi bcrypt.hash akan mengembalikan nilai string yang merupakan hasil dari proses hash (hashedPassword). Nah, nilai inilah yang akan kita masukkan ke database sebagai password.
        */
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = {
            text: 'INSERT INTO users VALUES($1, $2, $3, $4) RETURNING id',
            values: [id, username, hashedPassword, fullname],
        };

        const result = await this._pool.query(query);

        /* 
            Setelah melakukan kueri untuk memasukan user ke database, selanjutnya kita evaluasi nilai result.rows.length. Bila ia memiliki nilai 0, itu berarti proses memasukkan user baru gagal dijalankan (karena result.rows tidak menghasilkan user id baru). Nah, bila ini terjadi, bangkitkan InvariantError dengan pesan “User gagal ditambahkan”.

            Selain itu, kembalikan nilai addUser dengan result.rows[0].id. Mengapa? Karena kita akan membutuhkan id pada proses pengujian, lebih tepatnya untuk mengisi nilai variabel currentUserId.
        */
        if (!result.rows.length) {
            throw new InvariantError('User gagal ditambahkan');
        }
        return result.rows[0].id;
    }

    async verifyNewUsername(username) {
        const query = {
            text: 'SELECT username FROM users WHERE username = $1',
            values: [username],
        };

        const result = await this._pool.query(query);

        if (result.rows.length > 0) {
            /* 
                Mengapa kita gunakan InvariantError? Jawabannya tentu karena error ini termasuk kesalahan dalam bisnis logic yang tidak sesuai. I
                nvariantError akan menghasilkan status code 400 dengan pesan ‘Gagal menambahkan user. Username sudah digunakan’. Pesan tersebut disesuaikan dengan pesan yang kita tetapkan pada skenario pengujian.
            */
            throw new InvariantError('Gagal menambahkan user. Username sudah digunakan.')
        }
    }

    async getUserById(userId) {
        const query = {
            text: 'SELECT id, username, fullname FROM users WHERE id = $1',
            values: [userId],
        };

        const result = await this._pool.query(query);

        /* 
            Kemudian evaluasi nilai result.rows.length. Bila nilainya 0, itu berarti user dengan id yang diminta tidak ditemukan. Bila ini terjadi, throw new NotFoundError dengan pesan ‘User tidak ditemukan’ (sesuai dengan skenario uji Getting User by Incorrect Id)
        */
        if (!result.rows.length) {
            throw new NotFoundError('User tidak ditemukan');
        }

        return result.rows[0];
    }

    async verifyUserCredential(username, password) {
        const query = {
            text: 'SELECT id, password FROM users WHERE username = $1',
            values: [username],
        };
        const result = await this._pool.query(query);

        if (!result.rows.length) {
            throw new AuthenticationError('Kredensial yang Anda berikan salah');
        }

        /* Dapatkan id dan password dari result.rows[0]. Untuk nilai password, kita tampung ke variabel hashedPassword ya biar tidak ambigu dengan variabel password di parameter */
        const { id, password: hashedPassword } = result.rows[0];

        /* 
            Komparasi nilai hashedPassword dengan password yang ada di parameter. Karena hashedPassword nilainya sudah di-hash, kita perlu bantuan bcrypt untuk komparasinya

            Untuk melakukan komparasi nilai string plain dan hashed menggunakan bcrypt, kita dapat memanfaatkan fungsi bcrypt.compare. Fungsi tersebut akan mengembalikan Promise boolean yang akan bernilai true bila nilai komparasi sesuai dan false bila nilai komparasi tidak sesuai.
        */
        const match = await bcrypt.compare(password, hashedPassword);

        if (!match) {
            throw new AuthenticationError('Kredensial yang Anda berikan salah');
        }

        // Nilai user id nantinya akan digunakan dalam membuat access token dan refresh token
        return id;
    }
}

module.exports = UsersService