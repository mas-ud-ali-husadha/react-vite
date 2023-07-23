import fetchError from "@/helper/fetchError";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface FetchAction<Data, Id, Params, Response> {
  (data: Data, id?: Id, params?: Params): Promise<Response>;
}

interface UseFetchDataReturn<Data, Response> {
  fetch: (data: Data, id?: any, params?: any) => void;
  response: Response | null;
  setResponse: React.Dispatch<React.SetStateAction<Response | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseFetchDataProps<Data, Id, Params, Response> {
  action: FetchAction<Data, Id, Params, Response>;
  setError?: any;
  onSuccess?: (data: any) => void;
  message?: string;
}

type Error = {
  errors: string;
};

type Result<Response> = {
  data: Response;
  message: string;
};

const useFetchData = <Data, Id, Params, Response>({
  action,
  setError,
  onSuccess,
  message,
}: UseFetchDataProps<Data, Id, Params, Response>): UseFetchDataReturn<
  Data,
  Response
> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<Response | null>(null);

  const fetch = async (data: Data, id?: Id, params?: Params) => {
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
      toast.success(resMessage);
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
