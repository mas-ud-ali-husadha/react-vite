import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginPost } from "./action";
import { AccessTokenData } from "@/types/LoginTypes";

interface LoginState {
  userData: AccessTokenData;
  loading: boolean;
  error: string;
}

const initialState: LoginState = {
  userData: {} as AccessTokenData,
  loading: false,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLoggedOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginPost.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errors[0];
        } else {
          state.error = String(action.error.message);
        }
      })
      .addCase(
        LoginPost.fulfilled,
        (state, action: PayloadAction<AccessTokenData>) => {
          state.loading = false;
          state.userData = action.payload;
        }
      );
  },
});
export const { userLoggedOut } = loginSlice.actions;

export default loginSlice.reducer;
