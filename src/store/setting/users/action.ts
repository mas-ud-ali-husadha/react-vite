import { api } from "@/api/axios";
import { Users } from "@/api/endpoints";
import { ListData } from "@/types/UserTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getListUsers = createAsyncThunk(
  "users/getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(Users.action);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUser = async (data: ListData) => {
  const response = await api.post(Users.action, data);
  return response;
};

export const editUser = async (data: ListData) => {
  const response = await api.put(Users.action, data);
  return response;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`${Users.action}/${id}`);
  return response;
};
