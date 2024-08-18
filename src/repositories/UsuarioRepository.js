const GenericRepository = require('./GenericRepository');

class UsuarioRepository extends GenericRepository {
    constructor(model) {
        super(model);

        this.model = model;
    }

    async findByEmail(email) {
        return await this.model.findOne({ where: { email } });
    }
}

module.exports = UsuarioRepository;