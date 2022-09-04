import { createPortal } from "react-dom";
import "../styles/Modal.css";

export default function Modal({ open, children, onClose }) {
	if (!open) return null;
	return (
		<div>
			{createPortal(
				<div className="modal">
					<div className="modal-bg">{/* empty on purpose */}</div>
					<div className="modal-content">
						<button className="close-btn" onClick={onClose}>
							x
						</button>
						{children}
					</div>
				</div>,
				document.getElementById("modal-root")
			)}
		</div>
	);
}
