module.exports  = app => {
    var router = require("express").Router();
    const controller = require('../controller/userController');

    router.post("/create", controller.create)
    app.use(router)
}