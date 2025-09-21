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

    // creo la query per le ricenzioni 
     const sqlReviews = 'SELECT * FROM reviews WHERE id =?'


    //passo i parametri
    conection.query(sqlMovies,[id],(err, resultMovies) => {
        if (err) return res.status(500).json({error:`errore nella esecuzione : ${err}`} )


    //verifico di aver trovato il lìfilm
     if (resultMovies.length ===0 ||resultMovies [0].id === null) return res.status
     (404).json ({error : 'film non trovato'})

    //eseguo la query del reviews
     conection.query(sqlReviews,[id],(err,resulReviews) => {
         if (err) return res.status(500).json({error:`errore nella esecuzione :${err}`} )
            
    // creo un nuovo oggetto contenente i dati dei film e l'array delle recensioni 
       const filmWithreviews = {
        ...resultMovies[0],reviews: resulReviews
       }
        
       res.send (filmWithreviews)

     })

     
    })

}

module.exports = {
    index,
    show
}