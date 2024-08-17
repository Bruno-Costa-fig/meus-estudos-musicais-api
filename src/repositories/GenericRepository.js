class GenericRepository {
    constructor(model) {
        this.Model = model;
    }

    async create(data) {
        return await this.Model.create(data);
    }

    async findAll() {
        return await this.Model.findAll();
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