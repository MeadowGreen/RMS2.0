var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
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

// Virtual for a person's first name.
PersonSchema.virtual('person_name').get(function () {
    return this.first_name;
});

// Virtual for this person URL.
PersonSchema.virtual('url').get(function () {
    return '/catalog/person/' + this._id;
});

// Virtual for the person serial number.
PersonSchema.virtual('name').get(function () {
    return this.officer_serial_number;
});

// Export model.
module.exports = mongoose.model('Person', PersonSchema);