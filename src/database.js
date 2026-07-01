const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/gastos';

mongoose.connect(URI)
.then(() => console.log('BD conectada localmente con MongoDB Compass'))
.catch(err => console.error(err));

module.exports = mongoose;