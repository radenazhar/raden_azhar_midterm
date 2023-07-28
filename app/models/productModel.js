module.exports = mongoose => {
    
    const productSchema = new mongoose.Schema(
        {
            videoID : String,
            url : String,
            image_url : String, 
            title : String,
            price : Number,
        },
        {
            timestamps :true,
            versionKey:false,
        }
    );
    return mongoose.model("product", productSchema);
}