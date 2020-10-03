import React, { useState } from "react";

export const IncompleteForm = () => {
  const [textInput, setTextInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [confirmEmailInput, setConfirmEmailInput] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl italic font-bold text-gray-700">
        Request an Invite
      </h2>
      <span className="w-10 bg-gray-600 h-1 my-3" />
      <form className="w-full">
        <fieldset className="my-10 flex flex-col justify-center items-center space-y-2">
          <input
            className="m-auto input"
            type="text"
            value={textInput}
            placeholder="Full name"
          />
          <input
            className="m-auto input"
            type="email"
            value={emailInput}
            placeholder="Email"
          />
          <input
            className="m-auto input"
            type="email"
            value={confirmEmailInput}
            placeholder="Confirm email"
          />
        </fieldset>
        <button type="submit" className="btn btn-small w-full">
          Send
        </button>
      </form>
    </div>
  );
};
