const { Router } = require('express');
const { validationResult, check} = require('express-validator');
const Parish = require('../models/Parish');
const router = Router();

router.get('/', async function(req, res){
    try {
        const parish = await Parish.find();
        res.send(parish);
        console.log(parish);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/', async function(req, res){

    let parish =  await Parish.findOne({name: req.body.name});
    if (parish) {
        return res.send('Parroquia existe en esta Diocesis');
    }
    console.log(req.body);
    try {
        let parish = new Parish();
        parish.name = req.body.name;
        parish.fechaCreacion = new Date();
        parish.diocese = req.body.diocese._id;
        parish.location = req.body.location;
        parish = await parish.save();
        res.send(parish);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});



module.exports = router;
