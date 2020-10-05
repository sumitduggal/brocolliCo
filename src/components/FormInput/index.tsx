import React from "react";

type FormInputProps = {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
  errorMessage?: string;
};

export const FormInput = ({
  required,
  type,
  name,
  placeholder,
  value,
  onChange,
  hasError,
  errorMessage,
}: FormInputProps) => {
  const handleFullNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    onChange(value);
  };

  return (
    <label>
      <input
        {...{ required, type, name, placeholder, value }}
        aria-label={`${name}-input`}
        className="m-auto input"
        onChange={handleFullNameChange}
      />
      {hasError && (
        <span aria-label={`${name}-input-error`} className="form-error">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
