import React from 'react';

const Modal = ({ children, onClose, show, modalColor }) => {
  if (!show) {
    return null;
  }

  const backdropStyle = {
    position: 'fixed',
    display: 'flex',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    minHeight: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(5px)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: `url(/close.png), auto`,
    zIndex: 1050,
  };

  const modalStyle = {
    position: 'unset',
    display: 'unset',
    backgroundColor: modalColor || 'transparent',
    top: 'unset',
    left: 'unset',
    width: 'auto',
    height: 'auto',
    boxShadow: '0 1em 5em #000',
    zIndex: 1060,
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="backdrop" style={backdropStyle} onClick={onClose}>
      <div className="modal" style={modalStyle}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
