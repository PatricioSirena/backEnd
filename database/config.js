const mongoose = require('mongoose');

const dbConnection =async ()=>{
    console.log(process.env.MONGO_DB_CNN);
    try {
        await mongoose.connect(process.env.MONGO_DB_CNN);
        console.log("estamos conectados a la base de  datos");
    } catch (error) {
        throw new Error("Error a la hora de iniciar la base de datos");
    }
}
module.exports={
    dbConnection
}