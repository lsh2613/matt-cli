import { createSlice } from '@reduxjs/toolkit'

export const searchKeySlice = createSlice({
  name: 'searchKeySlice',
  initialState: {
    searchKey: '',
  },
  reducers: {
    onChangeKeyword: (state, action) => {
      state.searchKey = action.payload
    },
    initKeyword: (state) => {
      state.searchKey = ''
    },
  },
})

export const { onChangeKeyword, initKeyword } = searchKeySlice.actions
export default searchKeySlice.reducer
