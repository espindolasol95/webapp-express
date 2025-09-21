// importare la connessione al db

const conection = require ('../data/db')

// index

const index = (req,res) => {
    console.log('metodo index')

} 
//show
const show = (req,res) =>{
    console.log ('mettodo show')
}

module.exports = {
    index,
    show
}