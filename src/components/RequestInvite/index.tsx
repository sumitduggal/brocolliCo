import React, { useState } from "react";

import Modal, { ModalProps } from "../Modal";
import { IncompleteForm } from "./IncompleteForm";
import { SuccessfulFormSubmission } from "./SuccessfulFormSubmission";

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
        component = (
          <IncompleteForm
            formSubmittedSuccessful={() =>
              setModalStage(RequestInviteStage.SUCCESS)
            }
          />
        );
        break;
      case RequestInviteStage.SUCCESS:
      default:
        component = (
          <SuccessfulFormSubmission onRequestClose={onRequestClose} />
        );
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
