import React, { useState } from "react";
import {
  FormResponseType,
  RequestInviteFormData,
  requestInviteFormSubmit,
} from "../../api";
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

  const handleFullNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    setFullNameInput(value);
  };

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    setEmailInput(value);
  };

  const handleConfirmEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    setConfirmEmailInput(value);
  };

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const isFullNameValid = checkFullNameValidation(fullNameInput);
    const isEmailValid = checkEmailValidation(emailInput);
    const isConfirmEmailValid = checkConfirmEmailValidation(
      confirmEmailInput,
      emailInput
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

    const isFormValid = isFullNameValid;
    if (isFormValid) {
      setFormSubmitting(true);
      const formData: RequestInviteFormData = {
        name: fullNameInput,
        email: emailInput,
      };
      const { ok, error } = await requestInviteFormSubmit(formData);
      // Note: for better UX and to avoid
      // noticing flicker when response is too quick
      setTimeout(() => {
        if (ok) {
          formSubmittedSuccessful();
        } else {
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
      }, 2000);
    }
    setTimeout(() => {
      setFormSubmitting(false);
    }, 2000);
  };

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
          <label>
            <input
              required
              type="text"
              name="name"
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
              name="email"
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
