const express = require('express');
const cors = require("cors");
const app = express();
const db = require("./app/models")

const corsOptions = {
    origin : "*"
};

app.use(cors(corsOptions));

app.use(express.json());

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//Konek ke database
db.mongoose.connect(db.url, mongooseConfig)
.then(()=> console.log('Database berhasil terkoneksi!'))
.catch(err => {
    console.log(`Gagal Terkoneksi ${err.message}`);
    process.exit();
})

//memanggil routes video
require("./app/routes/videoRoute")(app);
//memanggil routes comment
require("./app/routes/commentRoute")(app);
//memanggil routes products
require("./app/routes/productRoute")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server berjalan pada port ${PORT}`));