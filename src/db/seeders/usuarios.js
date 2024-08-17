const { QueryInterface, Sequelize } = require("sequelize");
const Usuarios = require('../../models/Usuarios');

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Usuarios.bulkCreate([
            {
                nome:"admin",
                email:"admin@email.com"
            },
        ])
    },

   down: async (QueryInterface, Sequelize) => {
    await Usuarios.destroy({email:[
        "admin@email.com",
        ]
    })
   }
    
}