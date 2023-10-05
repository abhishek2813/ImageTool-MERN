const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const ImageSchema = require("./models/ImageSchema");
require("dotenv").config();

// contact With MonoDb database
mongoose.connect(process.env.MONGOURL).then((res)=>console.log("mongodb contacted"))

// Variable
const PORT = Number(process.env.PORT) || 8001;
const app = express();

//Middleware
app.use(cors("http://localhost:3000/"));
app.use(express.json());

// for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImg = multer({
  storage: storage,
});

app.post("/upload", uploadImg.single("file"), (req, res) => {
  ImageSchema.create({image:req.file.filename})
  .then(data=>res.json({msg:"Insert Success"}))
  .catch(err=>res.json({err:err}))
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
