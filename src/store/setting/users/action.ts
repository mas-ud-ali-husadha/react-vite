import { api } from "@/api/axios";
import { Users } from "@/api/endpoints";
import { ListData, UserResponse } from "@/types/UserTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type Error = {
  errors: string;
};

export const getListUsers = createAsyncThunk<
  UserResponse,
  void,
  { rejectValue: Error }
>("users/getData", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<UserResponse>(Users.action);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const createUser = async (data: ListData) => {
  const response = await api.post(Users.action, data);
  return response;
};

export const editUser = async (data: ListData) => {
  const response = await api.put(Users.action, data);
  return response;
};

export const deleteUser = async (id: ListData) => {
  const response = await api.delete(`${Users.action}/${String(id)}`);
  return response;
};
