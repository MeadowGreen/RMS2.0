var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    code: { type: String, required: true },
    code_quan: { type: Number, required: true },
    last_name: { type: Number, required: true },
    first_name: { type: String, required: true },
    middle: { type: String, required: true },
    ssn_dl: { type: String, required: true },
    dl_state: { type: String, required: true },
    dl_exp: { type: String, required: true },
    race: { type: String, required: true },
    origin: { type: String, required: true },
    sex: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    eyes: { type: String, required: true },
    hair: { type: String, required: true },
    date_birth: { type: String, required: true },
    age: { type: Number, required: true },
    scars: { type: String, required: true },
    home_address: { type: String, required: true },
    phone_number: { type: Number, required: true },
    gang: { type: String, required: true },
    hazards: { type: String, required: true },
    photos: { type: String, required: true },
});