import NoteCard from "./NoteCard";

export default function NoteCards({ notes }) {
	const NoteCards = notes.map((item, index) => <NoteCard key={index} item={item} />);
	return <div className="note-cards">{NoteCards}</div>;
}
