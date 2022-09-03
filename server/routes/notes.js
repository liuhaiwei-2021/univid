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
	const name = req.body.name;
	const img = req.body.img;
	const newNote = new Note({
		content,
		user: {
			name: "Admin",
			img: "https://static-cdn.sr.se/images/2071/64a598d6-1b11-4828-8a64-dd79cab3d7f8.jpg",
		},
	});
	newNote.save();
	res.send("note added succefully");
});

module.exports = router;
