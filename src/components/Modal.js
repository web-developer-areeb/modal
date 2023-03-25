import ReactDOM from "react-dom";

const Modal = ({ setOpenModal }) => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal-layover">
        <div className="modal-message">
          <div className="modal-message_button-wrapper">
            <button className="btn" onClick={() => setOpenModal(false)}>
              X
            </button>
          </div>
          <p>I am a modal.</p>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
