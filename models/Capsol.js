const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	location: Object,
	authorId: mongoose.Types.ObjectId
});

module.exports = mongoose.model("Capsol", schema, 'capsols');