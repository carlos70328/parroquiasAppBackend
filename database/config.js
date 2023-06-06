const mongoose = require('mongoose');


const getConnection = async () => {

    try {
       
        const url = process.env.BD;
        await mongoose.connect(url);
        console.log('Conexion exitosa');

    } catch (error){
        console.log (error);
    }    
}

module.exports = {
    getConnection,
}
