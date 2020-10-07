import React, { useState } from "react";
import {
  FormResponseType,
  RequestInviteFormData,
  requestInviteFormSubmit,
} from "../../api";
import { FormInput } from "../FormInput";
import {
  checkConfirmEmailValidation,
  checkEmailValidation,
  checkFullNameValidation,
} from "./formHelpers";

type FormErrors = {
  fullName: boolean;
  email: boolean;
  confirmEmail: boolean;
  formSubmission: FormResponseType;
};

type IncompleteFormProps = {
  formSubmittedSuccessful: () => void;
};

export const IncompleteForm = ({
  formSubmittedSuccessful,
}: IncompleteFormProps) => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [confirmEmailInput, setConfirmEmailInput] = useState("");

  const [isSubmitting, setFormSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    fullName: false,
    email: false,
    confirmEmail: false,
    formSubmission: {
      ok: true,
    },
  });

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const fullNameTrimmed = fullNameInput.trim();
    const emailTrimmed = emailInput.trim();
    const confirmEmailTrimmed = confirmEmailInput.trim();

    const isFullNameValid = checkFullNameValidation(fullNameTrimmed);
    const isEmailValid = checkEmailValidation(emailTrimmed);
    const isConfirmEmailValid = checkConfirmEmailValidation(
      confirmEmailTrimmed,
      emailTrimmed
    );
    setErrors(() => {
      return {
        fullName: !isFullNameValid,
        email: !isEmailValid,
        confirmEmail: !isConfirmEmailValid,
        formSubmission: {
          ok: true,
        },
      };
    });

    const isFormValid = isFullNameValid && isEmailValid && isConfirmEmailValid;
    if (isFormValid) {
      setFormSubmitting(true);
      const formData: RequestInviteFormData = {
        name: fullNameTrimmed,
        email: emailTrimmed,
      };
      const { ok, error } = await requestInviteFormSubmit(formData);

      // Note: for better UX and to avoid
      // noticing flicker when response is too quick
      setTimeout(() => {
        if (ok) {
          formSubmittedSuccessful();
        } else {
          setFormSubmitting(false);
          setErrors((prevState) => {
            return {
              ...prevState,
              formSubmission: {
                ok,
                error,
              },
            };
          });
        }
      }, 1000);
    }
  };

  // Altering submit button css classNames
  // based on the submit state
  const submittingProps = isSubmitting
    ? "opacity-50 select-none cursor-not-allowed"
    : null;

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl italic font-bold text-gray-700">
        Request an Invite
      </h2>
      <span className="w-10 bg-gray-600 h-1 my-3" />
      <form className="w-full" onSubmit={handleOnSubmit}>
        <fieldset className="my-10 flex flex-col justify-center items-center space-y-2">
          <FormInput
            required
            type="text"
            name="name"
            placeholder="Full name"
            value={fullNameInput}
            onChange={setFullNameInput}
            hasError={errors.fullName}
            errorMessage="Full name must be atleast 3 characters long"
          />
          <FormInput
            required
            type="email"
            name="email"
            placeholder="Email"
            value={emailInput}
            onChange={setEmailInput}
            hasError={errors.email}
            errorMessage="Enter a valid email address"
          />
          <FormInput
            required
            type="email"
            name="email"
            placeholder="Confirm Email"
            value={confirmEmailInput}
            onChange={setConfirmEmailInput}
            hasError={errors.confirmEmail}
            errorMessage="Confirm email address should match Email address"
          />
        </fieldset>
        <button
          type="submit"
          className={`btn btn-small w-full ${submittingProps}`}
        >
          {isSubmitting ? "Sending, please wait..." : "Send"}
        </button>
        {!errors.formSubmission.ok && (
          <div className="form-error text-center mt-5">
            {errors.formSubmission.error?.errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};
