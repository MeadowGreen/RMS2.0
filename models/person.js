var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: Number, required: true },
    middle_name: { type: Number, required: true },
    ssn: { type: String, required: true },
    dl: { type: Number, required: true },
    dl_state: { type: String, required: true },
    dl_exp: { type: String, required: true },
    race: { type: String, required: true },
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
    officer_name: { type: String, required: true },
    officer_serial_number: { type: Number, required: true },
    report_date: { type: Date, required: true },
    report_time: { type: String, required: true }
});