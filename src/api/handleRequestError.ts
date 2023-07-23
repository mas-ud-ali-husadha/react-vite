import { store } from "@/store";
import { userLoggedOut } from "@/store/auth/login/slice";
import toast from "react-hot-toast";

const handleRequestError = (err: any) => {
  const {
    response: {
      status,
      data: { errors },
    },
  } = err;

  if (!status) {
    return toast.error("Tidak terhubung ke internet");
  }

  switch (status) {
    case 403:
      store.dispatch(userLoggedOut());
      toast.error(String(errors[0]));
      break;
    default:
      if (errors[0]) {
        toast.error(String(errors[0]));
      }
  }
};

export default handleRequestError;
