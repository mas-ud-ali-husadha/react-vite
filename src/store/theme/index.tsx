import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: {
    type: "decked",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLayout: (state, action) => {
      const copy = { ...state.layout };
      copy.type = action.payload;
      state.layout = copy;
    },
    setDefaultLayout: (state) => {
      const copy = { ...state.layout };
      copy.type = 'decked';
      state.layout = copy;
    },
  },
});

export const { setLayout, setDefaultLayout } = themeSlice.actions;

export default themeSlice.reducer;
