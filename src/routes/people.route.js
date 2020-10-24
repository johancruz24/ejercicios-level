const { Router } = require('express') ;
const router = Router()

const peopleCtrl = require('../controllers/peoples.controllers.js')

//Rutas
router.get('/', peopleCtrl.getPeoples)
router.post('/', peopleCtrl.createPeople)


module.exports = router