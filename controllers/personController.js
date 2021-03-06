var Incident = require('../models/incident');
var Person = require('../models/person');
var Vehicle = require('../models/vehicle');

// Display the home page.
exports.index = function (req, res) {
    res.render('index');
};

// Display list of all persons.
exports.person_list = function(req, res, next) {
    Person.find()
        .sort({ person: 'asc', test: -1 })
        .exec(function (err, list_person) {
            console.log(list_person);
            if (err) { return next(err); }
            //Successful, so render
            res.render('person_list', { title: 'Person List', person_list: list_person });
        });
};

// Display detail page for a specific person.
exports.person_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Person detail: ' + req.params.id);
};

// Display person create form on GET.
exports.person_create_get = function(req, res) {
    res.render('person_form');
};

// Handle person create on POST.
exports.person_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Person create POST');
};

// Display person delete form on GET.
exports.person_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Person delete GET');
};

// Handle person delete on POST.
exports.person_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Person delete POST');
};

// Display person update form on GET.
exports.person_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Person update GET');
};

// Handle person update on POST.
exports.person_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Person update POST');
};