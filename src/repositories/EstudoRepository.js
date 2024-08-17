const Estudo = require('../models/Estudo');
const GenericRepository = require('./GenericRepository');

class EstudoRepository extends GenericRepository {
    constructor() {
        super(Estudo);
    }
}

module.exports = EstudoRepository;