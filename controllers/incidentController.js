var Incident = require('../models/incident');
var Person = require('../models/person');
var Vehicle = require('../models/vehicle');
const { body,validationResult } = require('express-validator');

// Display the home page.n

exports.index = function (req, res, next) {
    res.render('index');
}

// Display list of all incidents.
exports.incident_list = function(req, res, next) {
    Incident.find()
        .sort({ ir: 'asc', test: -1 })
        .exec(function (err, list_incidents) {
            console.log(list_incidents);
            if (err) { return next(err); }
            //Successful, so render
            res.render('incident_list', { title: 'Incident List', incident_list: list_incidents });
        });
};

// Display detail page for a specific incident.
exports.incident_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Incident detail: ' + req.params.id);
};

// Display incident create form on GET.

exports.incident_create_get = function (req, res) {
    res.render('incident_form');
};

exports.incident_create_post = [ 
    // Process request after validation and sanitization.
    (req, res, next) => {
     // Create incident object with escaped and trimmed data
        var incident = new Incident(
            {
                ir: req.body.ir,
                incident_type: req.body.incident_type,
                occurrence_date: req.body.occurrence_date,
                occurrence_time: req.body.occurrence_time,
                location_address: req.body.location_address,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer_name: req.body.officer_name,
                officer_num: req.body.officer_num,
                report_date: req.body.report_date,
                report_time: req.body.report_time,
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Save incident.
            incident.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new incident.
                res.redirect(incident.url);
            });
        }
    }

];

// Display incident delete form on GET.
exports.incident_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Incident delete GET');
};

// Handle incident delete on POST.
exports.incident_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Incident delete POST');
};

// Display incident update form on GET.
exports.incident_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Incident update GET');
};
  
// Handle incident update on POST.
exports.incident_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Incident update POST');
};