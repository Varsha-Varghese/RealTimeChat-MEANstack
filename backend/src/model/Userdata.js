const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@fsdfiles.fneg2.mongodb.net/vchat?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    username: String,
    email: String,
    password:String,
    image:String,
    contacts:[{ name: String,isMuted:Boolean,isBlocked:Boolean}]
});

//Model
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;