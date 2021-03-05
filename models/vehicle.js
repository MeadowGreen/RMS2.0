var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    vin: { type: String, required: true },
    license_num: { type: String, required: true },
    license_state: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    details: { type: String, required: true },
    value: { type: Number, required: true },
    officer_name: { type: String, required: true },
    officer_serial_number: { type: Number, required: true },
    report_date: { type: Date, required: true },
    report_time: { type: String, required: true }
});