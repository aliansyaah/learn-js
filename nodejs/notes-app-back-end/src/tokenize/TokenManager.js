const Jwt = require('@hapi/jwt');

const TokenManager = {

    /* Parameter payload merupakan objek yang disimpan ke dalam salah satu artifacts JWT. Biasanya objek payload berisi properti yang mengindikasikan identitas pengguna, contohnya user id. */
    generateAccessToken(payload) {
        /* 
            Kemudian kembalikan fungsi ini dengan JWT token yang dibuat menggunakan fungsi JWT.token.generate() dari package @hapi/jwt 

            Fungsi generate menerima dua parameter, yang pertama adalah payload dan kedua adalah secretKey. Pada parameter payload, kita akan memberikan nilai payload yang ada di parameter fungsi. Kemudian secretKey, sesuai namanya ia adalah kunci yang digunakan algoritma enkripsi sebagai kombinasi untuk membuat JWT token. Kunci ini bersifat rahasia, jadi jangan disimpan di source code secara transparan. Kita akan simpan key di dalam environment variable ACCESS_TOKEN_KEY
        */
        return Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY);
    },

    // Untuk mempersingkat penulisan kode fungsi yang hanya 1 baris, bisa dilakukan seperti ini
    // generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY),

    // Generate refresh token
    generateRefreshToken: (payload) => Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY),

    // Verify refresh token
    verifyRefreshToken: (refreshToken) => {
        try {
            /* 
                Untuk melakukan verifikasi token menggunakan @hapi/jwt dapat dilakukan menggunakan fungsi Jwt.token.verifySignature. Namun, fungsi verifySignature itu sendiri, hanya menerima token dalam bentuk artifacts atau token yang sudah di-decoded. Kita tidak bisa menggunakan refreshToken secara langsung.

                Untuk men-decoded token, gunakan fungsi Jwt.token.decoded dan fungsi tersebut akan mengembalikan artifacts.
            */
            const artifacts = Jwt.token.decode(refreshToken);

            /* 
                Setelah artifacts didapatkan, barulah kita bisa melakukan verifikasi. Silakan panggil fungsi Jwt.token.verifySignature dengan memberikan artifacts dan process.env.REFRESH_TOKEN_KEY sebagai nilai parameternya

                Fungsi verifySignature ini akan mengecek apakah refresh token memiliki signature yang sesuai atau tidak. Jika hasil verifikasi sesuai, fungsi ini akan lolos. Namun bila tidak, maka fungsi ini akan membangkitkan eror
            */
            Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);

            /* Kembalikan fungsi dengan nilai payload yang di dapat dari artifacts.decoded */
            const { payload } = artifacts.decoded;
            
            /* Nilai payload tersebut nantinya akan digunakan dalam membuat akses token baru */
            return payload;
        } catch (error) {
            throw new InvariantError('Refresh token tidak valid');
        }
    },
};

module.exports = TokenManager;