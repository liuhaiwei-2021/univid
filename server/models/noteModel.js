//NPM packages
const mongodb = require("mongoose");

const notesSchema = {
	content: { type: String, required: true },
	user: {
		name: { type: String },
		img: { type: String },
	},
};

const Note = mongodb.model("Note", notesSchema);
module.exports = Note;
