import S from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = ({onHideModal}) => {
  return <div className={S.backdrop} onClick={onHideModal} />;
};

const ModalOverlay = ({children}) => {
  return (
    <div className={S.modal}>
      <div className={S.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal({children, onHideModal}) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHideModal={onHideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
