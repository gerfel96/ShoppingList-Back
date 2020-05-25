// to run mongo --> mongodb in terminal
// mongod --config /usr/local/etc/mongod.conf --fork
const mongoose = require('mongoose');

// direccion donde estara mi db
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

// parametros para conectarse a la db
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// variable de conexion
const connection = mongoose.connection;

// cuando la conexion se establece saco un log ..
connection.once('open', () => {
    console.log('MongoDB is connected');
});