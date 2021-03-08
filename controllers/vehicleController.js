var Incident = require('../models/incident');
var Person = require('../models/person');
var Vehicle = require('../models/vehicle');

// Display the home page.
exports.index = function (req, res) {
    res.render('index');
};

// Display list of all vehicles.
exports.vehicle_list = function(req, res, next) {
    Vehicle.find()
        .sort({ vehicle: 'asc', test: -1 })
        .exec(function (err, list_vehicle) {
            console.log(list_vehicle);
            if (err) { return next(err); }
            //Successful, so render
            res.render('vehicle_list', { title: 'Vehicle List', vehicle_list: list_vehicle });
        });
};

// Display detail page for a specific vehicle.
exports.vehicle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id);
};

// Display vehicle create form on GET.
exports.vehicle_create_get = function(req, res) {
    res.render('vehicle_form');
};

// Handle vehicle create on POST.
exports.vehicle_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Vehicle create POST');
};

// Display vehicle delete form on GET.
exports.vehicle_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Vehicle delete GET');
};

// Handle vehicle delete on POST.
exports.vehicle_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Vehicle delete POST');
};

// Display vehicle update form on GET.
exports.vehicle_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Vehicle update GET');
};

// Handle vehicle update on POST.
exports.vehicle_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Vehicle update POST');
};