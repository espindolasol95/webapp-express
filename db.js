//importo mysql2
const mysql = require ('mysql2')


//creo la conessione
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})
//stabilisco la connesione al db
connection.connect ((err)=>{
if(err){
    console.log(`errore nella connesione al db ${err}`)
}else{
    console.log('connesione al db avvenuta correttamente')
}
})