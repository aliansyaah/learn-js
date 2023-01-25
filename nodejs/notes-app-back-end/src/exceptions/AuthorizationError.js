/* Buat custom class AuthorizationError yang mewarisi class ClientError. Berikan statusCode dengan nilai 403 dan this.name dengan nilai ‘AuthorizationError’. */
const ClientError = require('./ClientError');

class AuthorizationError extends ClientError {
    constructor(message) {
        super(message, 403);
        this.name = 'AuthorizationError';
    }
}

module.exports = AuthorizationError;