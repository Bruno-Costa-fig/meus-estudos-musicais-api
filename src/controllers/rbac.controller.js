const { Permission } = require("../models/rbac/Permission");
const { Role } = require("../models/rbac/Role");
const { Usuarios } = require("../models/Usuarios");
const { UserRole } = require("../models/rbac/UserRole");

class RBAC {
    async listPermissions(req, res) {
        const data = await Permission.findAll();
        const total = await Permission.count();

        return res.status(200).json({ data, total });
    }

    async createOnePermission(req, res) {
        try {
            const { description } = req.body;

            if (!description) {
                return res.status(400).json({ error: 'Description is required' });
            }

            const permission = await Permission.findOne({ where: {description} });
            if(permission) {
                return res.status(400).json({ error: 'Permission already exists' });
            }

            const newPermission = await Permission.create({
                description
            })

            return res.status(201).json(newPermission);
        } catch (error) {
            console.log(error.message)
            return response.status(400).send({ message: "A permissão não pôde ser criada!" })
        }
    }

    async listRoles(req, res) {
        const data = await Role.findAll();
        const total = await Role.count();

        return res.status(200).json({ data, total });
    }

    async createOneRole(req, res) {
        try {
            const { description } = req.body;

            if (!description) {
                return res.status(400).json({ error: 'Description is required' });
            }

            const role = await Role.findOne({ where: {description} });
            if(role) {
                return res.status(400).json({ error: 'Role already exists' });
            }

            const newRole = await Role.create({
                description
            })

            return res.status(201).json(newRole);
        } catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: "A role não pôde ser criada!" })
        }
    }

    async listPermissionsByRole(req, res) {
        try {
            const { id } = req.params;
            const role = await Role.findOne({ where: { id },
                include: [{ model: Permission }]
            });

            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }

            return res.status(200).json(role);
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ message: 'Algo deu errado' });
        }
    }

    async addPermissionToRole(req, res) {
        try {
            const { roleId, permissionId } = req.body;

            if (!roleId || !permissionId) {
                return res.status(400).json({ error: 'Role and Permission are required' });
            }

            const role = await Role.findOne({ where: { id: roleId } });
            if (!role) {
                return res.status(404).json({ error: 'Role not found' });
            }

            const permission = await Permission.findOne({ where: { id: permissionId } });
            if (!permission) {
                return res.status(404).json({ error: 'Permission not found' });
            }

            await role.addPermission(permission);

            return res.status(200).json({ message: 'Permission added to role' });
        } catch (error) {
            return response.status(500).json({ message: 'Algo deu errado' });
        }
    }

    async addRoleToUser(req, res) {
        try {
            const { usuario_id, roleId } = req.body;

            if (!usuario_id || !roleId) {
                return res.status(400).json({ error: "User and Role id's are required" });
            }

            const user = await Usuarios.findOne({ where: { id: usuario_id } });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const role = await Role.findOne({ where: { id: roleId } });
            if (!role) {
                return res.status(404).json({ error: 'Role not found' });
            }

            // await user.addRole(role);
            await UserRole.create({ usuario_id, roleId });

            return res.status(200).json({ message: 'Role added to user' });
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ message: 'Algo deu errado' });
        }
    }

    async listRolesByUser(req, res) {
        try {
            const { id } = req.params;
            const user = await Usuarios.findOne({ where: { id },
                include: [{ model: Role }]
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ message: 'Algo deu errado' });
        }
    }
}

module.exports = new RBAC();