class GenericController {
    async create(req, res, repository) {
        try {
            const entity = await repository.create(req.body);
            res.status(201).json(entity);
        } catch (error) {
            console.error('Error in create:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async findAll(req, res, repository) {
        try {
            const entities = await repository.findAll();
            res.status(200).json(entities);
        } catch (error) {
            console.error('Error in findAll:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res, repository) {
        try {
            const { id } = req.params;
            const entity = await repository.findById(id); // Use findByPk instead of findById
            if (!entity) {
                return res.status(404).json({ message: 'Nenhum resultado encontrado!' });
            }
            res.status(200).json(entity);
        } catch (error) {
            console.error('Error in findById:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res, repository) {
        try {
            const { id } = req.params;
            const [updated] = await repository.update(id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Nenhum resultado encontrado!' });
            }
            const updatedEntity = await repository.findById(id);
            res.status(200).json(updatedEntity);
        } catch (error) {
            console.error('Error in update:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res, repository) {
        try {
            const { id } = req.params;
            const deleted = await repository.delete(id);
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

module.exports = new GenericController();