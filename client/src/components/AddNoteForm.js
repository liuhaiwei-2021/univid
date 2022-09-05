//NPM packages
import { useState } from "react";
import axios from "axios";
//project files
import "../styles/AddNote.css";

export default function AddNoteForm({ setIsOpen }) {
	//local state
	const [error, setError] = useState(null);
	const [content, setContent] = useState("");
	const [name, setName] = useState("");
	const [img, setImg] = useState("");

	async function sendPostRequest(url, object) {
		try {
			const response = await axios.post(url, object);
			alert(response.data);
		} catch (err) {
			console.error(err);
			setError(err.message);
		}
	}

	function handleClick(e) {
		e.preventDefault();

		let newNote = {
			content,
			user: { name, img },
		};
		console.log(newNote);

		sendPostRequest("http://localhost:3001/create", newNote);
		setIsOpen(false);
	}

	return (
		<form className="add-form" onSubmit={handleClick}>
			{error && <h1>Something happened! We will fix it asap!</h1>}

			<input
				className="note-name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Add your name"
				required
			/>
			<input
				className="note-img"
				value={img}
				onChange={(e) => setImg(e.target.value)}
				placeholder="Add your img link"
				required
			/>
			<textarea
				className="note-content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="Add your note"
				rows="4"
				type="text"
				required
			/>

			<button className="commit-btn">Commit</button>
		</form>
	);
}
