import React from "react";

function Modal(props) {
  const { children, onClose, show, modalColor } = props;

  if (!show) {
    return null;
  }

  const backdropStyle = {
    position: "fixed",
    display: "flex",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    minHeight: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(5px)",
    alignItems: "center",
    justifyContent: "center",
    cursor: `url(/close.png), auto`,
    zIndex: 1050
  };

  const modalStyle = {
    position: "unset",
    display: "unset",
    backgroundColor: modalColor ? modalColor : "transparent",
    top: "unset",
    left: "unset",
    width: "auto",
    height: "auto",
    boxShadow: "0 1em 5em #000",
    zIndex: 1060
  };

  return (
    <div className="backdrop" style={backdropStyle} onClick={onClose}>
      <div className="modal" style={modalStyle}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
