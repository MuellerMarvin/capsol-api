const mongoose = require("mongoose")

const schema = mongoose.Schema({
    contentType: String,
    content: Object,
    authorId: mongoose.Types.ObjectId,
    capsolId: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("Entry", schema, 'entries');