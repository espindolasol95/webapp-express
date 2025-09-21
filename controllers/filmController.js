// importare la connessione al db

const conection = require ('../data/db')

// index

const index = (req,res) => {
  const sql = 'SELECT * FROM movies'
    conection.query(sql,(err, results) => {
        if (err) return res. status(500).json (`errore nella esecuzione : ${err}` )
     res.send(results)
    })
} 
//show
const show = (req,res) =>{
     res.send(`Dettaglio film con id ${req.params.id}`);
}

module.exports = {
    index,
    show
}