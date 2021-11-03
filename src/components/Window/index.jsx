import Modal from "react-modal";

export default function Widnow({show, onClose, card}){
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay">

            <div className="close-btn-ctn">
                <h2 style={{ flex: "1 90%" }}>{card.title}</h2>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{card.content}</p>
                <h2>Status</h2>
                <p>{card.icon} {`${card.status.charAt(0).toUpperCase()}${card.status.slice(1)}`}</p>
            </div>
        </Modal>
    )
}