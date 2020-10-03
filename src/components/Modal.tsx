import React from "react";
import ReactModal from "react-modal";
import merge from "deepmerge";

const DEFAULT_STYLING: ReactModal.Styles = {
  content: {
    width: "min(100%, 460px)",
    position: "relative",
    minHeight: "12rem",
    maxHeight: "80vh",
    display: "flex",

    background: "none",
    border: "none",
    padding: 0,
    borderRadius: "12px",
    top: "10vh",
    boxShadow: `0 40px 120px rgba(0,0,0,0.5)`,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
};

type ModalProps = {
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
