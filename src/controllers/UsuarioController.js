const GenericController = require('./GenericController');
const bcrypt = require('bcrypt');

class UsuarioController extends GenericController {

    constructor(userRepository) {
        super(userRepository);
    }

    async createNewUser(req, res) {
        try {
            const { nome, email, senha } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).send('Nome, email e senha são obrigatórios');
            }

            const usuarioExistente = await this.repository.findByEmail(email);

            if (usuarioExistente) {
                return res.status(400).send('Email já cadastrado');
            }

            const senhaEncriptada = await bcrypt.hash(senha, 10);

            const novoUsuario = await this.repository.create({ nome, email, senha: senhaEncriptada });
            res.status(201).json(novoUsuario);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erro no servidor');
        }
    }
}

module.exports = UsuarioController;