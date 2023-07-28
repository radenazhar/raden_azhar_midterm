module.exports = mongoose => {
    const commentSchema = new mongoose.Schema(
        {
            videoID : String,
            username : String,
            comment : String, 
        }, 
        {
            timestamps : true,
            versionKey : false,
        }
    );
    
    return mongoose.model("comments", commentSchema);
}