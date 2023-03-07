//Importar modulo
const sql = require('mssql')

//Objeto de conexión-> no olvidar las opciones
const sqlConfig = {
    user: "root2",
    password: "root2",
    database: "newDb",
    server: "localhost",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
}

async function getConnection () {  
    try {
        const pool = await sql.connect(sqlConfig);
        return pool
    } catch (error) {  
        console.log('Es un error ->');
        console.error(error); 
    }
}

exports.getConnection = getConnection