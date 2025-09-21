//importo express 

const express = require('express')

//importo il router
const router = express.Router()

//importo controler 
const filmController = require ('../controllers/filmController')

// definizione delle rotte
//index
router.get('/',filmController.index)

//show
router.get('/:id',filmController.show)


module.exports= router