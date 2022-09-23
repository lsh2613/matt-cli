import { createSlice } from '@reduxjs/toolkit'

export const searchKeySlice = createSlice({
  name: 'searchKeySlice',
  initialState: {
    searchKey: '',
    status: false,
  },
  reducers: {
    onChangeKeyword: (state, action) => {
      state.searchKey = action.payload
    },
    onSearch: (state) => {
      state.status = true
    },
    initKeyword: (state) => {
      state.searchKey = ''
      state.status = false
    },
  },
})

export const { onChangeKeyword, onSearch, initKeyword } = searchKeySlice.actions
export default searchKeySlice.reducer
