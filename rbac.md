# criação dos models
- permission
- permissionRole
- role
- userRole

# Criação da controller RBAC
Os métodos da controller definirão o CRUD para implementação das permissões

- listPermissions
- createOnePermission
- listRoles
- createOneRole
- listPermissionsByRole
- addPermissionToRole
- addRoleToUser

Obs: lembrar que com os relacionamentos no sequelize ele cria uns métodos extras

# configurar as rotas
Adicionar as rotas do rbac para utilização

# config do middleware
configurar o middleware que fará a verificação das permissões