const Gem = require('../models/Gem');
const GenericRepository = require('./GenericRepository');

class GemRepository extends GenericRepository {
    constructor() {
        super(Gem);
    }
}

module.exports = GemRepository;