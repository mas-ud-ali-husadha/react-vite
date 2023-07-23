import { auth } from "@/api/axios";
import { Auth } from "@/api/endpoints";
import { AccessTokenData, LoginPayload } from "@/types/LoginTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type Error = {
  errors: string;
};

export const LoginPost = createAsyncThunk<
  AccessTokenData,
  LoginPayload,
  { rejectValue: Error }
>("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await auth.post<AccessTokenData>(Auth.login, data);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
