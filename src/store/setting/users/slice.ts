import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListUsers } from "./action";
import { User, UserResponse } from "@/types/UserTypes";

interface InitialStateType {
  list: User[];
  error: string;
  params: any;
  filterName: string;
  loading: boolean;
  total: number;
}

export const initialState: InitialStateType = {
  list: [],
  params: {},
  error: "",
  filterName: "",
  loading: false,
  total: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeParams: (state, action) => {
      const { key, value } = action.payload;
      state.params = {
        ...state.params,
        [key]: value,
      };
    },
    changePage: (state, action) => {
      const value = action.payload;
      state.params.page = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
      })
      .addCase(
        getListUsers.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.loading = false;
          state.list = action.payload.data.list;
          state.total = action.payload.data.meta.total;
        }
      );
  },
});

export const { changeParams, changePage } = usersSlice.actions;

export default usersSlice.reducer;
