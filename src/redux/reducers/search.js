import { createSlice } from '@reduxjs/toolkit'

export const searchKeySlice = createSlice({
  name: 'searchKeySlice',
  initialState: {
    searchKey: '어쩌라고',
  },
  reducers: {
    onChange: (state, action) => {
      console.log(action)
      state.searchKey = action.payload
    },
  },
})

export const { onChange } = searchKeySlice.actions
export default searchKeySlice.reducer
