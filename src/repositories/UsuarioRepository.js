const Usuarios = require('../models/Usuarios');
const GenericRepository = require('./GenericRepository');

class UsuarioRepository extends GenericRepository {
    constructor() {
        super(Usuarios);
    }

    async findByEmail(email) {
        return await Usuarios.findOne({ where: { email } });
    }
}

module.exports = new UsuarioRepository();