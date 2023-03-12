const mongoose = require("mongoose");

const Meme = mongoose.model("Meme", { caption: String, image: String });

module.exports = Meme;