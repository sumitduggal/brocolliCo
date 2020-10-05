import * as formHelpers from "./formHelpers";

describe("formHelpers", () => {
  describe("checkFullNameValidation()", () => {
    it("should return true if fullname length is equal to 3 characters", () => {
      const expected = true;
      expect(formHelpers.checkFullNameValidation("123")).toEqual(expected);
    });

    it("should return true if fullname length is more than 3 characters", () => {
      const expected = true;
      expect(formHelpers.checkFullNameValidation("12345")).toEqual(expected);
    });

    it("should return false if fullname length is less than 3 characters", () => {
      const expected = false;
      expect(formHelpers.checkFullNameValidation("12")).toEqual(expected);
    });
  });

  describe("checkEmailValidation()", () => {
    it("should return true if email value is of valid email format", () => {
      const expected = true;
      expect(formHelpers.checkEmailValidation("test@test.com")).toEqual(
        expected
      );
    });

    it("should return false if email value is of invalid email format", () => {
      const expected = false;
      expect(formHelpers.checkEmailValidation("12")).toEqual(expected);
      expect(formHelpers.checkEmailValidation("test@")).toEqual(expected);
      expect(formHelpers.checkEmailValidation("test@test")).toEqual(expected);
      expect(formHelpers.checkEmailValidation("test@test.")).toEqual(expected);
    });
  });

  describe("checkConfirmEmailValidation()", () => {
    it("should return true if email and confirmEmail values are equal", () => {
      const expected = true;
      expect(
        formHelpers.checkConfirmEmailValidation(
          "test@test.com",
          "test@test.com"
        )
      ).toEqual(expected);
    });

    it("should return false if email and confirmEmail values are not equal", () => {
      const expected = false;
      expect(
        formHelpers.checkConfirmEmailValidation(
          "test@mail.com",
          "test@test.com"
        )
      ).toEqual(expected);
    });

    it("should return false if confirmEmail is not of a valid email format", () => {
      const expected = false;
      expect(formHelpers.checkConfirmEmailValidation("12", "12")).toEqual(
        expected
      );
    });
  });
});
