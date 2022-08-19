const db = require("../model/index");
const User = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = async (req, res) => {
const CreateUser = {
    ...req.body
}

await User.create(CreateUser).then(x => {res.status(201).send(x)}).catch(err => {res.status(500).send({message : err})})
};
// Retrieve all User from the database.
exports.findAll = async (req, res) => {
await User.findAll().then(x => {res.status(200).send(x)}).catch(err => {res.status(500).send({message : err})})
};
// Find a single User with an id
exports.findOne = async (req, res) => {
    const username = req.body.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    await User.findAll({ where: condition })
      .then(x => {
        if (x) {
          res.status(200).send(x);
        } else {
          res.status(404).send({
            message: `Cannot find User with username=${username}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with username=" + username
        });
      });
};
// Update a User by the id in the request
exports.update = async (req, res) => {
    const username = req.params.username;

    await User.update(req.body, {
      where: { username: username }
    })
      .then(num => {
          res.status(204).send({
            message: "User was updated successfully."
          });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
};
// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
    const username = req.params.username;
    await User.destroy({
      where: { username: username }
    })
      .then(num => {
        res.status(202).send({message : "User deleted successfully"})
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not User with username=" + username
        });
      });
};