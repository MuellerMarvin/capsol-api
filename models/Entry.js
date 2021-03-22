const mongoose = require("mongoose")

const schema = mongoose.Schema({
    type: String,
    content: Object,
    author: mongoose.Types.ObjectId,
    capsol: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("Entry", schema, 'entries');