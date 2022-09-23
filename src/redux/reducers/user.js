import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState: {
    user: {
      id: '',
      loginId: '',
      nickname: '',
      gender: '',
      birthday: '',
      email: '',
      phoneNumber: '',
    },
  },

  reducers: {
    setUser: (state, action) => {
      console.log(action)
      //state.initialState = action.payload
    },
    initUser: (state) => {
      state.user = {
        id: '',
        loginId: '',
        nickname: '',
        gender: '',
        birthday: '',
        email: '',
        phoneNumber: '',
      }
    },
  },
})

export const { setUser, initUser } = userInfoSlice.actions
export default userInfoSlice.reducer
