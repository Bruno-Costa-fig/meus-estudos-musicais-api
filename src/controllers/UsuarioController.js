const UsuarioRepository = require('../repositories/UsuarioRepository');
const GenericController = require('./GenericController');
const bcrypt = require('bcrypt');

class UsuarioController {

    async createNewUser(req, res) {
        try {
            const { nome, email, senha } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).send('Nome, email e senha são obrigatórios');
            }

            const usuarioExistente = await UsuarioRepository.findByEmail(email);

            if (usuarioExistente) {
                return res.status(400).send('Email já cadastrado');
            }

            const senhaEncriptada = await bcrypt.hash(senha, 10);

            const novoUsuario = await UsuarioRepository.create({ nome, email, senha: senhaEncriptada });
            res.status(201).json(novoUsuario);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erro no servidor');
        }
    }

    async create(req, res) {
        await GenericController.create(req, res, UsuarioRepository);
    }
   
    async findAll(req, res) {
        await GenericController.findAll(req, res, UsuarioRepository);
    }
    
    async findById(req, res) {
        await GenericController.findById(req, res, UsuarioRepository);
    }
    
    async update(req, res) {
        await GenericController.update(req, res, UsuarioRepository);
    }
    
    async delete(req, res) {
        await GenericController.delete(req, res, UsuarioRepository);
    }
}

module.exports = new UsuarioController();