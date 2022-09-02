//NPM packages
import { useState } from "react";
import axios from "axios";
//project files
import "../styles/AddNote.css";

export default function AddNote() {
	//local state
	const [content, setContent] = useState("");
	const [name, setName] = useState("");
	const [img, setImg] = useState("");

	function handleClick(e) {
		e.preventDefault();

		let newNote = {
			content,
			user: { name: name, img: img },
		};

		axios.post("http://localhost:3001/create", newNote);
	}
	return (
		<form className="add-form">
			<img
				className="user-img"
				src="https://static-cdn.sr.se/images/2071/64a598d6-1b11-4828-8a64-dd79cab3d7f8.jpg"
				alt="user-img"
			/>
			<textarea
				className="note-textarea"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="Add a note"
				type="text"
				id="note"
				required
			/>
			<button onClick={handleClick} className="commit-button">
				Commit
			</button>
		</form>
	);
}
