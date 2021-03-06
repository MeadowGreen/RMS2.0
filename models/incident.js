var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Schema for the incident page based on the mongoDB databse
var IncidentSchema = new Schema({
    ir: { type: Number, required: true },
    incident_type: { type: String, required: true },
    occurrence_date: { type: Date, required: true },
    occurrence_time: { type: String, required: true },
    location_address: { type: String, required: true },
    location_name: { type: String, required: true },
    narrative: { type: String, required: true },
    officer_name: { type: String, required: true },
    officer_num: { type: Number, required: true },
    report_date: { type: Date, required: true },
    report_time: { type: String, required: true }
});

// Virtual for incident incident type.
IncidentSchema.virtual('incident_case').get(function () {
    return this.incident_type;
});

// Virtual for this incident URL.
IncidentSchema.virtual('url').get(function () {
    return '/catalog/incident/' + this._id;
});

// Virtual for this incident officer serial number.
IncidentSchema.virtual('name').get(function () {
    return this.officer_serial_number;
});

// Exports model.
module.exports = mongoose.model('Incident', IncidentSchema);