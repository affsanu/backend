const mongoose = require('mongoose');

const dbConn = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database Connected!");
        })
        .catch((error) => {
            console.log(error.message);
        });
}

module.exports = dbConn;