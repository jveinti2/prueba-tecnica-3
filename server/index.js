//Imports
const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./database')

//Settings
const port = 3000


//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/inventario', require('./routes/inventario'))


//Listen
app.listen(port, ()=> {
    console.log('Server up');
})


