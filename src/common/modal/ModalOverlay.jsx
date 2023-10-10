function ModalOverlay({children}) {
  return (
    <>
      <div className="modal">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default ModalOverlay;
