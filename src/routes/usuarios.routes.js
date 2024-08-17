const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

/**
 * @swagger
 * /usuarios/:
 *   get:
 *     tags:
 *       - Usuario
 *     description: Listas todos os usuários
 *     security:
 *       - apiKeyAuth: []
 *     responses:
 *       200:
 *         description: Listagem retornada com sucesso!
 *       401:
 *         description: Acesso negado!
 *       404:
 *         description: Nenhum registro encontrado!
 *       500:
 *         description: Erro no servidor!
 */
router.get('/', UsuarioController.findAll);


/**
 * @swagger
 * /usuarios/{id}/:
 *   get:
 *     tags:
 *       - Usuario
 *     description: Listas todos os usuários
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Listagem retornada com sucesso!
 *       401:
 *         description: Acesso negado!
 *       404:
 *         description: Nenhum registro encontrado!
 *       500:
 *         description: Erro no servidor!
 */
router.get('/:id', UsuarioController.findById);


/**
 * @swagger
 * /usuarios/:
 *   post:
 *     tags:
 *       - Usuario
 *     description: Criar novo usuário
 *     security:
 *       - apiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário cadastrado com sucesso!
 *       401:
 *         description: Acesso negado!
 *       404:
 *         description: Usuário não encontrado!
 *       500:
 *         description: Erro no servidor!
 */
router.post('/', UsuarioController.createNewUser);


/**
 * @swagger
 * /usuarios/{id}/:
 *   put:
 *     tags:
 *       - Usuario
 *     description: Atualizar dados do usuário
 *     security:
 *       - apiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso!
 *       401:
 *         description: Acesso negado!
 *       404:
 *         description: Usuário não encontrado!
 *       500:
 *         description: Erro no servidor!
 */
router.put('/:id', UsuarioController.update);

/**
 * @swagger
 * /usuarios/{id}/:
 *   delete:
 *     tags:
 *       - Usuario
 *     description: Remover um usuário
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso!
 *       401:
 *         description: Acesso negado!
 *       404:
 *         description: Usuário não encontrado!
 *       500:
 *         description: Erro no servidor!
 */
router.delete('/:id', UsuarioController.delete);

module.exports = router;