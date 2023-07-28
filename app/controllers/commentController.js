const db = require("../models");
const Comment = db.comments

exports.insertComment = async (req, res) => {
    try {
        const comment = {
           videoId : req.params.videoId,
           username : req.body.username,
           content : req.body.content,
        };
        if (!comment.content || !comment.username) {
            return res.status(400).json({
              status: 400,
              message: "username and content are required",
            });
          }
        const newComment = await new Comment(comment).save();
        res.status(201).json({
            status: 200,
            message: "Berhasil",
            data: newComment,
          });
        } catch (e) {
          res.status(500).json({
            status: 500,
            message: "Internal server error",
          });
        }   
};

