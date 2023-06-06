const { Router } = require('express');
const { validationResult, check} = require('express-validator');
const Chapel = require('../models/Chapel');
const router = Router();

router.get('/', async function(req, res){
    try {
        const chapel = await Chapel.find();
        res.send(chapel);
        console.log(chapel);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/', async function(req, res){

    let chapel =  await Chapel.findOne({name: req.body.name});
    if (chapel) {
        return res.send('Parroquia existe en esta Diocesis');
    }
    console.log(req.body);
    try {
        let chapel = new Chapel();
        chapel.name = req.body.name;
        chapel.fechaCreacion = new Date();
        chapel.parish = req.body.parish._id;
        chapel = await chapel.save();
        res.send(chapel);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});



module.exports = router;
