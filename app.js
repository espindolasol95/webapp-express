//importo express
const express = require ('express')

//const conection = require ('./data/db')

//creo l'instanza dell app atraverso  metodo express che ho creato

const app = express()

// definisco il numero di posrta su qui deve girare  l'applicazione
const port = process.env.PORT

// definisco la rotta base 
app.get("/",(req,res) => {
    res.send ("Rotta base del mio blog")

})


//dico al server di rimanere in ascolto 

app.listen(port,()=>{
console.log(`server in ascolto sulla porta ${port}`)
})