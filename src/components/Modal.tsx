import React from "react";
import ReactModal from "react-modal";
import merge from "deepmerge";

const DEFAULT_STYLING: ReactModal.Styles = {
  content: {
    width: "min(100%, 360px)",
    position: "relative",
    minHeight: "12rem",
    maxHeight: "80vh",
    display: "flex",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "none",
    border: "none",
    padding: 0,
    boxShadow: `0 40px 120px rgba(0,0,0,0.5)`,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export type ModalProps = {
  isModalOpen: boolean;
  onRequestClose: () => void;
  modalStyles?: any;
};

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onRequestClose,
  children,
  modalStyles,
}) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={merge(DEFAULT_STYLING, modalStyles || {})}
    >
      {children}
    </ReactModal>
  );
};

ReactModal.setAppElement("#root");

export default Modal;
