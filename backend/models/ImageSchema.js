const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: {
    type: "String",
    require: true,
  },
});

module.exports= mongoose.model("images",ImageSchema);