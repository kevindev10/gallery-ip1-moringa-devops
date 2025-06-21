require('dotenv').config();
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;



console.log("process.env", process.env);
console.log('MONGO_USERNAME', MONGO_USERNAME);
console.log('MONGO_PASSWORD', MONGO_PASSWORD);

var config = {}

// Update to have your correct username and password
config.mongoURI = {
    // production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    // test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',


    production: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.7ksi9cx.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0`,

    development: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.7ksi9cx.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0`,

    test: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.7ksi9cx.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0`

}
module.exports = config;


