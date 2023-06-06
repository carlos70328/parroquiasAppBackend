const { Router } = require('express');
const { validationResult, check} = require('express-validator');
const Diocese = require('../models/Diocese');
const router = Router();

router.get('/', async function(req, res){
    try {
        const diocese = await Diocese.find();
        res.send(diocese);
        console.log(diocese);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/', async function(req, res){

    let diocese =  await Diocese.findOne({name: req.body.name});
    if (diocese) {
        return res.send('Diocesis existe');
    }
    console.log(req.body);
    try {
        let diocese = new Diocese();
        diocese.name = req.body.name;
        
        diocese.fechaCreacion = new Date();
        diocese.archdiocese = req.body.archdiocese._id;
        diocese = await diocese.save();
        res.send(diocese);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});



module.exports = router;
