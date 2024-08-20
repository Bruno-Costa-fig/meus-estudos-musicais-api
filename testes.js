// const bcrypt = require('bcrypt');

// let senhaEncriptada = ''
// bcrypt.hash('bruno123', 10).then((hash) => senhaEncriptada = hash);

// setTimeout(() => {
//     console.log(senhaEncriptada)
// }, 5000);

const util = require('util');

// // Objeto complexo para inspeção
// const complexObject = {
//     name: 'Alice',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Wonderland'
//     },
//     hobbies: ['reading', 'gardening'],
//     getDetails: function() {
//         return `${this.name}, ${this.age} years old`;
//     }
// };

// // Usando util.inspect para inspecionar o objeto
// const inspectedObject = util.inspect(complexObject, { showHidden: false, depth: null, colors: true });

// console.log(inspectedObject);