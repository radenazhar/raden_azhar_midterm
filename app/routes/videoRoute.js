module.exports = app => {
    const Video = require("../controllers/videoController")
    const r = require('express').Router();

    r.post("/", Video.create);
    r.get("/", Video.findAll);
    r.get("/:id", Video.getVideoByID);
    

    app.use("/videos", r);
}