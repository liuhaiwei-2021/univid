//NPM packages
const mongodb = require("mongoose");

const notesSchema = {
	content: { type: String, required: true },
	user: {
		name: { type: String, required: true },
		img: { type: String, required: true },
	},
};

const Note = mongodb.model("Note", notesSchema);
module.exports = Note;
