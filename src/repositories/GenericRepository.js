class GenericRepository {
    constructor(model) {
        if (new.target === GenericRepository) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        
        this.Model = model;
    }

    async create(data) {
        return await this.Model.create(data);
    }

    async findAll() {
        return await this.Model.findAll();
    }

    async findOne(where) {
        return await this.Model.findOne(where);
    }

    async findById(id) {
        return await this.Model.findByPk(id);
    }

    async update(id, data) {
        return await this.Model.update(data, { where: { id } });
    }

    async delete(id) {
        return await this.Model.destroy({ where: { id } });
    }
}

module.exports = GenericRepository;