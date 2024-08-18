const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UsuarioRepository = require('../repositories/UsuarioRepository');
const Usuarios = require('../models/Usuarios');

const repUsuario = new UsuarioRepository(Usuarios);

/**
 * @swagger
 * /login/:
 *   post:
 *     tags:
 *       - Login
 *     description: Acesso/autenticação no sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso!
 *       404:
 *         description: Não foi possível realizar o login!
 *       500:
 *         description: Erro no servidor!
 */
router.post('/', async (req, res) => {
  try {
    const { email, senha } = req.body;

    console.log(req.body)

    console.log(email)
    const usuario = await repUsuario.findByEmail(email);

    if (!usuario) {
      return res.status(404).send('Usuário não encontrado');
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).send('Senha incorreta');
    }

    const payload = { id: usuario.id, email: usuario.email }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({token});

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;