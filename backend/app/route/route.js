module.exports  = app => {
    var router = require("express").Router();
    const controller = require('../controller/userController');

    router.post("/create", controller.create)
    router.get("/get",controller.findAll)
    router.post("/findOne", controller.findOne)
    router.put("/update/:username",controller.update)
    router.delete("/delete/:username",controller.delete)
    app.use(router)
}