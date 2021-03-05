var Incident = require('../models/incident');
var Person = require('../models/person');
var Vehicle = require('../models/vehicle');

var async = require('async');

// Display the home page.
exports.index = function (req, res) {
};

// Display list of all incidents.
exports.incident_list = function (req, res, next) {
    Incident.find()
        .sort([['ir', 'ascending']])
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
    res.send('NOT IMPLEMENTED: Incident create GET');
};

// Handle incident create on POST.
exports.incident_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Incident create POST');
};

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