import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("overlays");

function Modal({children, onClose}) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
