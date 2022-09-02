import { useState } from "react";
import axios from "axios";
import "../styles/AddNote.css";

function AddNote() {
	const [content, setContent] = useState("");
	const [name, setName] = useState("name");
	const [img, setImg] = useState(
		"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=women-s-white-and-black-button-up-collared-shirt-774909.jpg&fm=jpg"
	);

	function handleClick(e) {
		e.preventDefault();
		let newNote = {
			content,
			user: { name: name, img: img },
		};
		console.log(newNote);
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

export default AddNote;
