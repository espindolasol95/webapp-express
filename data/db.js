//importo mysql2
const mysql = require ('mysql2')


//creo la conessione
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})
//stabilisco la connesione al db
connection.connect ((err)=>{
if(err){
    console.log(`Errore nella connesione al db ${err}`)
}else{
    console.log('Connesione al db avvenuta correttamente')
}
})

module.exports = connection