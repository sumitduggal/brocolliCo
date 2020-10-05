import React from "react";
import { render } from "@testing-library/react";
import { FormInput } from "./index";

const defaultInputProps = {
  type: "text",
  name: "name",
  value: "full name",
  onChange: () => {},
  hasError: false,
  errorMessage: "Full name should be entered",
};

test("renders form input", () => {
  const utils = render(<FormInput {...defaultInputProps} />);
  const input = utils.getByLabelText("name-input");
  expect(input.value).toBe(defaultInputProps.value);
});

test("renders form input without placeholder if no placeholder provided", () => {
  const utils = render(<FormInput {...defaultInputProps} />);
  const input = utils.getByLabelText("name-input");
  expect(input.placeholder).toBe("");
});

test("renders form input with placeholder if no placeholder provided", () => {
  const utils = render(
    <FormInput
      {...{
        ...defaultInputProps,
        placeholder: "Enter your full name",
        value: "",
      }}
    />
  );
  const input = utils.getByLabelText("name-input");
  expect(input.placeholder).toBe("Enter your full name");
});

test("renders form input with error ", () => {
  const utils = render(
    <FormInput {...{ ...defaultInputProps, hasError: true }} />
  );
  const inputError = utils.getByLabelText("name-input-error");
  expect(inputError).toBeInTheDocument();
});
