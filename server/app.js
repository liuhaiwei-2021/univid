const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const notesRouter = require("./routes/notes.js");

var app = express();
const mongoURL = "mongodb+srv://haiwei:mongodb2022@cluster0.f2n998d.mongodb.net/univid";
mongoose.connect(
	mongoURL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => console.log("mongodb connected")
);

app.use(cors());
app.use(bodyParser.json());

app.use("/", notesRouter);

app.listen(3001, function () {
	console.log("Example app listening on port 3001!");
});
