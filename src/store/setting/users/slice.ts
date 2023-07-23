import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListUsers } from "./action";
import { User, UserResponse } from "@/types/UserTypes";

interface InitialStateType {
  list: User[];
  currentPage: number;
  totalItems: number;
  error: string;
  filterName: string;
  loading: boolean;
}

export const initialState: InitialStateType = {
  list: [],
  currentPage: 1,
  totalItems: 0,
  error: "",
  filterName: "",
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errors[0];
        } else {
          state.error = String(action.error.message);
        }
      })
      .addCase(
        getListUsers.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.loading = false;
          state.list = action.payload.data.list;
          state.totalItems = action.payload.data.meta.total;
        }
      );
  },
});

export default usersSlice.reducer;
