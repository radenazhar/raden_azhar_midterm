module.exports = app => {
    const Comment = require("../controllers/commentController")
    const r = require('express').Router();

    r.post("/videos/:videoId/comments", Comment.insertComment);
    app.use("/comments", r);

}