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
    login: false,
  },

  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload
      state.login = true
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
      state.login = false
    },
  },
})

export const { setUserInfo, initUser } = userInfoSlice.actions
export default userInfoSlice.reducer
