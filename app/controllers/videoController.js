const exp = require("constants");
const db = require("../models")
const Videos =  db.videos

exports.create = async (req, res) => {
    try { 
        const video = {
            thumbnailUrl : req.body.thumbnailUrl
        };
        if(!video.thumbnailUrl) {
            return res.status(400).json({
                status:400,
                message:"Thumbnail Required!",
            });
        }

        const newVideo = await new Videos(video).save();
        res.status(200).json({
            status:200,
            message:"Success",
            data:newVideo,
        });
    } catch(e) { 
        res.status(500).json({
            status : 500,
            message:"internal server error!"
        })
    }
}

exports.findAll = (req, res) => {
    Videos.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message : err.message}));
}

exports.getVideoByID = async (req, res) => {
    try{
        const id = req.params.id;
        const video = await Videos.findByID(id);
            if(!video) {
                return res.status(400).json({
                    status:404,
                    message:"Not Found!"
                })
            }
            res.status(200).json({
                status: 200,
                message: "Success",
                data: video,
              });
    } catch(e) {
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }

}
