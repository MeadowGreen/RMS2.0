var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    vechicle_num: { type: Number, required: true },
    vin: { type: String, required: true },
    license_num: { type: String, required: true },
    license_state: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    details: { type: String, required: true },
    value: { type: Number, required: true },
});