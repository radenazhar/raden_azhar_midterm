const { Schema } = require("mongoose");
const { object } = require("webidl-conversions");

module.exports = mongoose => {
    const Videoschema = new mongoose.Schema(
        {
            youtube_url : String,
            _thumbnailUrl : String,
        }, 
        {
            timestamps:true,
            versionKey:false,
        }
    );

    Videoschema.method("toJSON", function(){
        const{_id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("video", Videoschema);
}