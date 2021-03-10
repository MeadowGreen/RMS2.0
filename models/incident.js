var mongoose = require('mongoose');

var Schema = mongoose.Schema;

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

// Virtual for incident IR Number.
IncidentSchema.virtual('incident_number').get(function () {
    return this.ir;
});

// Virtual for this incident URL.
IncidentSchema.virtual('url').get(function () {
    return '/catalog/incident/' + this._id;
});

// Virtual for this incident serial number.
IncidentSchema.virtual('name').get(function () {
    return this.serial_number;
});

// Export model.
module.exports = mongoose.model('Incident', IncidentSchema);