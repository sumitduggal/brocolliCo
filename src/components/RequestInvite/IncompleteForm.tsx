import React, { FormEvent, useEffect, useState } from "react";

const checkFullNameValidation = (value: string): boolean => value.length >= 3;
const checkEmailValidation = (value: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};
const checkConfirmEmailValidation = (confirmEmail: string, email: string) =>
  confirmEmail === email;

type FormErrors = {
  fullName: boolean;
  email: boolean;
  confirmEmail: boolean;
};

export const IncompleteForm = () => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [confirmEmailInput, setConfirmEmailInput] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    fullName: false,
    email: false,
    confirmEmail: false,
  });

  const handleFullNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    if (value) setFullNameInput(value);
  };

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    if (value) setEmailInput(value);
  };

  const handleConfirmEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    if (value) setConfirmEmailInput(value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFullNameValid = checkFullNameValidation(fullNameInput);
    const isEmailValid = checkEmailValidation(emailInput);
    const isConfirmEmailValid = checkConfirmEmailValidation(
      confirmEmailInput,
      emailInput
    );
    setErrors((prevState) => {
      return {
        ...prevState,
        fullName: !isFullNameValid,
        email: !isEmailValid,
        confirmEmail: !isConfirmEmailValid,
      };
    });

    const isFormValid = isFullNameValid;
    if (isFormValid) {
      console.log("onSubmit");
    } else {
      console.log("errors");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl italic font-bold text-gray-700">
        Request an Invite
      </h2>
      <span className="w-10 bg-gray-600 h-1 my-3" />
      <form className="w-full" onSubmit={handleOnSubmit}>
        <fieldset className="my-10 flex flex-col justify-center items-center space-y-2">
          <label>
            <input
              required
              type="text"
              placeholder="Full name"
              className="m-auto input"
              value={fullNameInput}
              onChange={handleFullNameChange}
            />
            {errors.fullName && (
              <span className="form-error">
                Full name must be atleast 3 characters long
              </span>
            )}
          </label>
          <label>
            <input
              required
              type="email"
              placeholder="Email"
              className="m-auto input"
              value={emailInput}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <span className="form-error">Enter a valid email address</span>
            )}
          </label>
          <label>
            <input
              required
              type="email"
              placeholder="Confirm email"
              className="m-auto input"
              value={confirmEmailInput}
              onChange={handleConfirmEmailChange}
            />
            {errors.confirmEmail && (
              <span className="form-error">
                Confirm email address should match Email address
              </span>
            )}
          </label>
        </fieldset>
        <button type="submit" className={`btn btn-small w-full`}>
          Send
        </button>
      </form>
    </div>
  );
};
