const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	location: Object,
	entries: Array
});

module.exports = mongoose.model("Capsol", schema, 'capsols');