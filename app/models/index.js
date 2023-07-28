const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url:dbConfig.url,
    videos : require('./videoModel')(mongoose),
    products : require('./productModel')(mongoose),
    comments : require('./commentModel')(mongoose)
}