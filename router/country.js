const { Router } = require('express');
const { validationResult, check} = require('express-validator');
const Country = require('../models/Country');
const router = Router();

router.get('/', async function(req, res){
    try {
        const countries = await Country.find();
        res.send(countries);
        console.log(countries);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/', async function(req, res){

    let country =  await Country.findOne({name: req.body.name});
    if (country) {
        return res.send('Pais existe');
    }
    try {
        let country = new Country();
        country.name = req.body.name;
        country.fechaCreacion = new Date();
        country.archdiocese = req.body.archdiocese._id;
        country = await country.save();
        res.send(country);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});



module.exports = router;
