import mongoose from 'mongoose'
import config from '../config'
import process from 'process'
// Repositores and Schemas

import UserSchema from './user.model'
import UserRepo from './user.repo'


const mongodb = () => {
    if(process.env.NODE_ENV === "development"){
        mongoose.connect(config.mongoURI_test, {useNewUrlParser: true, useUnifiedTopology: true});
    }else{
        mongoose.connect(config.mongoURI_test, {useNewUrlParser: true, useUnifiedTopology: true});
    }
   
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('**mongo connected**')
    });
}

const User = UserRepo(UserSchema)

export default mongodb
export { User}