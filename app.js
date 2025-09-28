// carico le variabili dal file .env
require('dotenv').config()

//importo express
const express = require ('express')

//importo cors
const cors= require ('cors')
//creo l'instanza dell app atraverso  metodo express che ho creato
const app = express()

//registro il middleware per il cors
app.use (cors({origin: process.env.FE_APP}))

// definisco il numero di posrta su qui deve girare  l'applicazione
const port = process.env.PORT||3000

//importo il router
const filmRouter = require ('./routers/filmRouter')

app.use(express.static ('public'))

// definisco la rotta base 
app.get("/",(req,res) => {
    res.send ("Rotta base del mio blog")

})

// definisco le rotte per i film 
app.use ('/api/films', filmRouter)


//dico al server di rimanere in ascolto 

app.listen(port,()=>{
console.log(`Server in ascolto sulla porta ${port}`)
})

