const peopleCtrl = {}

const People = require('../models/peoples')

peopleCtrl.getPeoples = async (req, res) => {
    const peoples = await People.find()
    res.json(peoples)
}
peopleCtrl.createPeople = async (req, res) => {
  
   const newPeople = new People(req.body)

   await newPeople.save(function(err){
       if(err){
    console.log(String(err));
    res.send({message: 'People no Created'})
   }else{
    res.send({message: 'People Created'})
   }
   });
   
}


module.exports =  peopleCtrl;