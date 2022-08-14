const db = require("../model/index");
const User = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
const CreateUser = {
    ...req.body
}

User.create(CreateUser).then(x => {res.status(201).send(x)}).catch(err => {res.status(500).send({message : err})})
};
// Retrieve all User from the database.
exports.findAll = (req, res) => {
User.findAll().then(x => {res.status(200).send(x)}).catch(err => {res.status(500).send({message : err})})
};
// Find a single User with an id
exports.findOne = (req, res) => {

};
// Update a User by the id in the request
exports.update = (req, res) => {

};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all User from the database.
exports.deleteAll = (req, res) => {

};
// Find all published User
exports.findAllPublished = (req, res) => {
 
};