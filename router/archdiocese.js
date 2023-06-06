const { Router } = require('express');
const { validationResult, check} = require('express-validator');
const Archdiocese = require('../models/Archdiocese');
const router = Router();

router.get('/', async function(req, res){
    try {
        const archdiocese = await Archdiocese.find();
        res.send(archdiocese);
        console.log(archdiocese);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/', async function(req, res){

    let archdiocese =  await Archdiocese.findOne({name: req.body.name});
    if (archdiocese) {
        return res.send('Arquidiocesis existe');
    }
    console.log(req.body);
    try {
        let archdiocese = new Archdiocese();
        archdiocese.name = req.body.name;
        
        archdiocese.fechaCreacion = new Date();
        archdiocese.country = req.body.country._id;
        archdiocese = await archdiocese.save();
        res.send(archdiocese);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});



module.exports = router;
