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
		<form>
			<textarea
				className="note-textarea"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				type="text"
				id="note"
				required
			/>
			<button onClick={handleClick} className="comment-button">
				Add Note
			</button>
		</form>
	);
}
