import fetchError from "@/helper/fetchError";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface UseFetchDataProps {
  action: any;
  setError?: any;
  onSuccess?: (data: any) => void;
  message?: string;
  alert?: boolean;
}

type Error = {
  errors: string;
};

type Result<Response> = {
  data: Response;
  message: string;
};

const useFetchData = <Response,>({
  action,
  setError,
  onSuccess,
  message,
  alert = false,
}: UseFetchDataProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<Response | null>(null);

  const fetch = async (data?: any, id?: any, params?: any) => {
    setLoading(true);
    try {
      const res = await action(data, id, params);
      const response = res as AxiosResponse<Result<Response>>;

      const resData = response.data.data;
      const resMessage = response.data.message;

      setResponse(resData);
      onSuccess && onSuccess(resData);
      if (message) {
        return toast.success(message);
      }
      alert && toast.success(resMessage);
    } catch (err) {
      const error = err as AxiosError<Error>;
      fetchError(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return { fetch, response, setResponse, loading, setLoading };
};

export default useFetchData;
