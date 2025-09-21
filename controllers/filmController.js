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
    //recupero parametro id
    const{id} = req.params
    //creo la query
    const sqlMovies = 'SELECT * FROM movies WHERE id =?'
     //passo i parametri
     conection.query(sqlMovies,[id],(err, resultMovies) => {
        if (err) return res. status(500).json({error:`errore nella esecuzione : ${err}`} )
     res.send(resultMovies[0])
    })

}

module.exports = {
    index,
    show
}