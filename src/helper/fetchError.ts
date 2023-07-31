import { AxiosError } from "axios";
import toast from "react-hot-toast";

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
          if (typeof listError == "object") {
            Object.keys(listError).forEach((item) => {
              setError(item, {
                type: "validation",
                message: listError[item as any][0],
              });
              toast.error(listError[item as any][0]);
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
