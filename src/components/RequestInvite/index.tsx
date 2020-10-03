import React, { useState } from "react";

import Modal, { ModalProps } from "../Modal";
import { IncompleteForm } from "./IncompleteForm";

enum RequestInviteStage {
  INCOMPLETE = "INCOMPLETE",
  SUCCESS = "SUCCESS",
}

export const RequestInviteModal: React.FC<ModalProps> = ({
  isModalOpen,
  onRequestClose,
}) => {
  const [currentModalStage, setModalStage] = useState<RequestInviteStage>(
    RequestInviteStage.INCOMPLETE
  );

  const ModalComponent = () => {
    let component;
    switch (currentModalStage) {
      case RequestInviteStage.INCOMPLETE:
        component = <IncompleteForm />;
        break;
      case RequestInviteStage.SUCCESS:
      default:
        component = <div>Success</div>;
        break;
    }
    return component;
  };

  return (
    <Modal {...{ isModalOpen, onRequestClose }}>
      <div className="bg-white flex-auto p-10">
        <ModalComponent />
      </div>
    </Modal>
  );
};
