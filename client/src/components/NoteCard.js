import "../styles/NoteCard.css";

export default function NoteCard({ item }) {
	const { content, user } = item;
	return (
		<div className="note-card">
			<div>
				<img className="user-img" src={user?.img} alt="user-img" />
			</div>

			<div className="">
				<div className="user-name">{user?.name}</div>
				<div className="user-content"> {content}</div>
			</div>
		</div>
	);
}
