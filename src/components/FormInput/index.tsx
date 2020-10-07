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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onChange(value);
  };

  return (
    <label>
      <input
        {...{ required, type, name, placeholder, value }}
        aria-label={`${name}-input`}
        className="m-auto input"
        onChange={handleChange}
      />
      {hasError && (
        <span aria-label={`${name}-input-error`} className="form-error">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
