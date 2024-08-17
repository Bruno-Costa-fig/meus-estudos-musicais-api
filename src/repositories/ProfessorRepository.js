const Professor = require('../models/Professor');
const GenericRepository = require('./GenericRepository');

class ProfessorRepository extends GenericRepository {
    constructor() {
        super(Professor);
    }
}

module.exports = ProfessorRepository;