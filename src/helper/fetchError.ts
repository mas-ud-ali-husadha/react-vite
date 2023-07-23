import { AxiosError } from "axios";

type Error = {
  errors: string;
};

const fetchError = (error: AxiosError<Error>, setError: any) => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;
    switch (status) {
      case 422:
        if (data) {
          const listError = data.errors;
          if (setError) {
            Object.keys(listError).forEach((item) => {
              setError(item, {
                type: "validation",
                message: listError[item as any][0],
              });
            });
          }
        }
        break;

      default:
        break;
    }
  }
};

export default fetchError;
