const REQUEST_FORM_ENDPOINT =
  "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

export type RequestInviteFormData = {
  name: string;
  email: string;
};

type FormErrorObject = {
  errorMessage: string;
};

export type FormResponseType = {
  ok: boolean;
  error?: FormErrorObject;
};

export const requestInviteFormSubmit = async ({
  name,
  email,
}: RequestInviteFormData): Promise<FormResponseType> => {
  let result: FormResponseType;
  try {
    const response = await fetch(REQUEST_FORM_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const { ok } = response;
    if (ok) {
      result = {
        ok: true,
      };
    } else {
      const { errorMessage } = await response.json();
      const error = new Error(errorMessage);
      throw error;
    }
  } catch (error) {
    result = {
      ok: false,
      error: {
        errorMessage: error.message,
      },
    };
  }

  return result;
};
