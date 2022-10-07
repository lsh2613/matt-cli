import { createSlice } from '@reduxjs/toolkit'

export const mypageSlice = createSlice({
  name: 'mypageSlice',
  initialState: {
    menu: '전체',
  },
  reducers: {
    initMenu: (state) => {
      state.menu = '전체'
    },
    onChangeMenu: (state, action) => {
      state.menu = action.payload
    },
  },
})

export const { initMenu, onChangeMenu } = mypageSlice.actions
export default mypageSlice.reducer
