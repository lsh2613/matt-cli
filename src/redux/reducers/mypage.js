import { createSlice } from '@reduxjs/toolkit'

export const mypageSlice = createSlice({
  name: 'mypageSlice',
  initialState: {
    menu: 'class-menu',
  },
  reducers: {
    initMenu: (state) => {
      state.menu = 'class-menu'
    },
    onChangeMenu: (state, action) => {
      state.menu = action.payload
    },
  },
})

export const { initMenu, onChangeMenu } = mypageSlice.actions
export default mypageSlice.reducer
