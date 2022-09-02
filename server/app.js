<<<<<<< HEAD
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

=======
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import notesRouter from "./routes/notes.js";

var app = express();

app.use(cors());
app.use(bodyParser.json());

>>>>>>> c20c1d27d1a5da1e6ea1aca2b3748cff4b3945c9
app.use("/", notesRouter);

app.listen(3001, function () {
	console.log("Example app listening on port 3001!");
});
