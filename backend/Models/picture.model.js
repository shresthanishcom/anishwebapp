const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  photo_id: { type: Number, required: true },
  photo_name: { type: String, required: true },
  like_count: { type: Number },
});

const Pictures = mongoose.model("Pictures", pictureSchema);

module.exports = Pictures;
