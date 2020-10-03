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
  let result: FormResponseType = {
    ok: false,
    error: {
      errorMessage: "",
    },
  };
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

    const { ok, status } = response;
    if (ok) {
      result = {
        ok: true,
      };
    } else {
      if (status >= 400 && status < 500) {
        const { errorMessage } = await response.json();

        result = {
          ok: false,
          error: {
            errorMessage,
          },
        };
      }
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
