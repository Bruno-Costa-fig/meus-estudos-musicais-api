class GenericController {

    constructor(target) {
        if (new.target === GenericController) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.repository = target;
    }

    async create(req, res) {
        try {
            const entity = await this.repository.create(req.body);
            res.status(201).json(entity);
        } catch (error) {
            console.error('Error in create:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            console.log(this)
            const entities = await this.repository.findAll();
            res.status(200).json(entities);
        } catch (error) {
            console.error('Error in findAll:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const entity = await this.repository.findById(id); // Use findByPk instead of findById
            if (!entity) {
                return res.status(404).json({ message: 'Nenhum resultado encontrado!' });
            }
            res.status(200).json(entity);
        } catch (error) {
            console.error('Error in findById:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await this.repository.update(id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Nenhum resultado encontrado!' });
            }
            const updatedEntity = await this.repository.findById(id);
            res.status(200).json(updatedEntity);
        } catch (error) {
            console.error('Error in update:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await this.repository.delete(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Nenhum resultado encontrado!' });
            }
            res.status(204).send("Removido com sucesso!");
        } catch (error) {
            console.error('Error in delete:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = GenericController;