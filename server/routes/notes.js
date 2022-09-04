//NPM packages
const express = require("express");
const router = express.Router();

//project files
const Note = require("../models/noteModel.js");

//read all data
router.get("/getnotes", (req, res) => {
	Note.find().then((foundNotes) => res.json(foundNotes));
});

//create a note
router.post("/create", (req, res) => {
	const content = req.body.content;
	const name = req.body.user.name;
	const img = req.body.user.img;

	const newNote = new Note({
		content,
		user: {
			name,
			img,
		},
	});
	newNote.save();
	res.send("Note added succefully");
});

module.exports = router;
