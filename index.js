'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, { useNewUrlParser: true } ,(err, res)  => {
    if (err) {
        return console.log(`Error al conectar a la base de datos ${err}`)
    }
        {
        console.log('Conexion a la base de datos establecida')

        app.listen(config.port, () => {
            console.log(`API REST corriendo en http://localhost:${config.port}`)
        })

    }
});

