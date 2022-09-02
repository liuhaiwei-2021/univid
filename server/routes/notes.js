import express from "express";
import { getNotes, creatNote } from "../controllers/notes.js";

const router = express.Router();

router.get("/notes", getNotes);

router.post("/note", creatNote);

export default router;
