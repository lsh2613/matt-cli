import { createSlice } from "@reduxjs/toolkit";

export const communitySlice = createSlice({
  name: "communitySlice",
  initialState: {
    menu: "전체",
  },
  reducers: {
    initMenu: (state) => {
      state.menu = "community-menu";
    },
    onChangeMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { initMenu, onChangeMenu } = communitySlice.actions;
export default communitySlice.reducer;
