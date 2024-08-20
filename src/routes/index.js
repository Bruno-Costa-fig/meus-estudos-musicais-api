const { Router } = require('express');
const { swaggerSpec, swaggerUi } = require('../../autoGen.swagger');

// rotas
const authRoutes = require('./auth.routes');
const usuarioRoutes = require('./usuarios.routes');
const { auth } = require('../middlewares/auth');

// config rotas
const router = Router();

router.use('/usuarios', auth, usuarioRoutes);
router.use('/login', authRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use('/rbac', require('./rbac.routes'));

module.exports = router;