import React from "react";

type SuccessfulFormSubmissionProps = {
  onRequestClose: () => void;
};

export const SuccessfulFormSubmission = ({
  onRequestClose,
}: SuccessfulFormSubmissionProps) => <div className="flex flex-col justify-center items-center">
    <h2 className="text-xl italic font-bold text-green-600">All done!</h2>
    <span className="w-10 bg-green-700 h-1 my-3" />
    <p className="mt-6 mb-10 text-center">
        You will be the first one to experience Brocolli & Co, when we launch.
    </p>
    <button className="btn btn-small w-full" onClick={onRequestClose}>
        OK
    </button>
</div>
