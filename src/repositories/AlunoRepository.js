const Aluno = require('../models/Aluno');
const GenericRepository = require('./GenericRepository');

class AlunoRepository extends GenericRepository {
    constructor() {
        super(Aluno);
    }
}

module.exports = AlunoRepository;