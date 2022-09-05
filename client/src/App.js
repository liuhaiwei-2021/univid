import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import NoteCards from "./components/NoteCards";
import logo from "./logo.png";
import "./App.css";
import Modal from "./components/Modal";
import AddNoteForm from "./components/AddNoteForm";

const App = () => {
	// local state
	const [isOpen, setIsOpen] = useState(false);
	const url = "http://localhost:3001/getnotes";
	const [notes, setNotes] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		getNotes(url);
	}, [notes]);

	async function getNotes(url) {
		try {
			const response = await axios.get(url);
			setNotes(response.data);
		} catch (err) {
			console.error(err);
			setError(err.message);
		}
	}

	return (
		<div className="App">
			<div className="MainRow">
				<div className="VideoContainer">
					<div className="VideoCover" />
					<ReactPlayer
						className="ReactPlayer"
						width="100%"
						height="100%"
						url="https://www.youtube.com/watch?v=f1x9lgX8GaE&t=319s"
						playing
						loop
						muted
					/>
					<img src={logo} className="AppLogo" alt="logo" />
				</div>
				<div className="NotesContainer">
					<div className="NotesContainerSection">
						<Modal open={isOpen} onClose={() => setIsOpen(false)}>
							<AddNoteForm />
						</Modal>
						<NoteCards notes={notes} />

						<button className="add-btn" onClick={() => setIsOpen(true)}>
							Add a note
						</button>

						{error && <h1>Something happened! We will fix it asap!</h1>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
