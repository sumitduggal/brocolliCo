export const checkFullNameValidation = (value: string): boolean =>
  value.length >= 3;
export const checkEmailValidation = (value: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};
export const checkConfirmEmailValidation = (
  confirmEmail: string,
  email: string
) => confirmEmail === email;
