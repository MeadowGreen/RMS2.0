var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var incidentSchema = new Schema({
    ir: { type: Number, required: true },
    occurence_date: { type: Date, required: true },
    occurence_time: { type: String, required: true },
    incident_type: { type: String, required: true },
    location: { type: String, required: true },
    location_entry: { type: String, required: true },
    narrative: { type: String, required: true },
    case_status: { type: String, required: true },
    officer_name: { type: String, required: true },
    officer_serial_number: { type: Number, required: true },
    report_date: { type: Date, required: true },
    report_time: { type: String, required: true },
});