const fs = require('fs')

fs.appendFile('teste.txt', 'Olá Mundo', err => {
    console.log(err)
})