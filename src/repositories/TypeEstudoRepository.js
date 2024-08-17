const TypeEstudo = require('../models/TypeEstudo');
const GenericRepository = require('./GenericRepository');

class TypeEstudoRepository extends GenericRepository {
    constructor() {
        super(TypeEstudo);
    }
}

module.exports = TypeEstudoRepository;