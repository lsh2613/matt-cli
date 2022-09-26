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
    initSearch: (state) => {
      state.status = false
      state.searchKey = ''
    },
  },
})

export const { onChangeKeyword, onSearch, initSearch } = searchKeySlice.actions
export default searchKeySlice.reducer
