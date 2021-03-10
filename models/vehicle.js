var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
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

// Virtual for a vehicle's license number.
VehicleSchema.virtual('vehicle_number').get(function () {
    return this.license_num;
});

// Virtual for this vehicle URL.
VehicleSchema.virtual('url').get(function () {
    return '/catalog/vehicle/' + this._id;
});

// Virtual for the vehicle serial number.
VehicleSchema.virtual('name').get(function () {
    return this.officer_serial_number;
});

// Export model.
module.exports = mongoose.model('Vehicle', VehicleSchema);