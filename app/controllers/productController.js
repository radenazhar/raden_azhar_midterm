const db = require("../models")
const Products = db.products

exports.insertProduct = async (req,res) => {
    try {
        const product = {
            url: req.body.url,
            title:req.body.title,
            price:req.body.price,
            videoId:req.params.videoId,
        };
    if (!product.title || !product.price || !product.url) {
            return res.status(400).json({
              status: 400,
              message: "Title, Price, dan Url harus dimasukkan!",
            });
          }

          const newProduct = await new Products(product).save();
          res.status(201).json({
            status:201,
            message:"Berhasil",
            data :newProduct,
          });
    } catch(e) {
        res.status(500).json({status:500, message:"Internal Server Error!"})
    }
};


exports.findAll = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const products = await Products.find({ videoId: videoId});
        if(!products) { 
            res.status(201).json({
                status:201,
                message:"Berhasil",
                data:products,
            });
        }
    } catch(e) { 
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        });
    }
};

exports.getProductByID = async (req, res) => {
    try{
        const productId = req.params.productId
        const product = await Products.findByID(productId);

        if(!product){
            return res.status(404).json({
                status : 404,
                message : "Produk tidak ditemukan",
            });
        }
        res.status(201).json({
            status:201,
            message:"Berhasil",
            data : product,
        });
    }catch (e) {
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        });
    }
}

