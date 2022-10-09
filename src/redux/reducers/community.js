import { createSlice } from "@reduxjs/toolkit";

export const communitySlice = createSlice({
  name: "communitySlice",
  initialState: {
    menu: "community-menu",
    id: 0,
  },
  reducers: {
    initMenu: (state) => {
      state.menu = "community-menu";
    },
    onChangeMenu: (state, action) => {
      state.menu = action.payload;
    },
    onChangeId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { initMenu, onChangeMenu, onChangeId } = communitySlice.actions;
export default communitySlice.reducer;
