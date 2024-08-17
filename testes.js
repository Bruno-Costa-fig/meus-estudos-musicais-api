const bcrypt = require('bcrypt');

let senhaEncriptada = ''
bcrypt.hash('bruno123', 10).then((hash) => senhaEncriptada = hash);

setTimeout(() => {
    console.log(senhaEncriptada)
}, 5000);