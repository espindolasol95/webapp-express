// importare la connessione al db

const connection = require ('../data/db')

// index

const index = (req,res) => {
  const sql = 'SELECT * FROM movies'
    connection.query(sql,(err, results) => {
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
     const sqlReviews = 'SELECT * FROM reviews WHERE movie_id =?'


    //passo i parametri
    connection.query(sqlMovies,[id],(err, resultMovies) => {
        if (err) return res.status(500).json({error:`errore nella esecuzione : ${err}`} )


    //verifico di aver trovato il lìfilm
     if (resultMovies.length ===0 ||resultMovies [0].id === null) {return res.status
     (404).json ({error : 'film non trovato'})
     }

    //eseguo la query del reviews
     connection.query(sqlReviews,[id],(err,resulReviews) => {
         if (err) return res.status(500).json({error:`errore nella esecuzione :${err}`} )

    // creo un nuovo oggetto contenente i dati dei film e l'array delle recensioni 
       const filmWithreviews = {
        ...resultMovies[0],reviews: resulReviews
       }
        
       res.send (filmWithreviews)

     })
    })
  }

     
    
    //addReview

    const addReview = (req, res) =>{

        const {id} = req.params
        const {name, text, vote} = req.body
        
        if(!name||!text||!vote){
            return res.status(400).json({ error: ' I campi sono obbligatori' })
        }

        
         const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)'

       connection.query(sql, [id, name, vote, text], (err, result) => {
          if (err) return res.status(500).json({ error: err });
          res.status(201).json({ message: 'Recensione aggiunta', reviewId: result.insertId });
        
    });
};




module.exports = {
    index,
    show,
    addReview
}