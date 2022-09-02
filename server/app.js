import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import notesRouter from "./routes/notes.js";

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", notesRouter);

app.listen(3001, function () {
	console.log("Example app listening on port 3001!");
});
