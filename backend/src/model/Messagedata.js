const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@fsdfiles.fneg2.mongodb.net/vchat?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    isForwarded:Boolean,
    message:String,
    image:String,
    date:{type:Date , default:Date.now},
    room:String
    
});


var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;