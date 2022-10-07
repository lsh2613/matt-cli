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
      instructorId: '',
    },
    login: false,
  },

  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload
      state.login = true
    },
    initUser: (state) => {
      if (localStorage.getItem(''))
        state.user = {
          id: '',
          loginId: '',
          nickname: '',
          gender: '',
          birthday: '',
          email: '',
          phoneNumber: '',
          instructorId: '',
        }
      state.login = false
    },
    fetchUser: (state) => {
      if (localStorage.getItem('studentId')) {
        const index = [
          'id',
          'loginId',
          'nickname',
          'gender',
          'birthday',
          'email',
          'phoneNumber',
          'instructorId',
        ]
        index.map((item) => {
          state.user[item] = localStorage.getItem(item)
        })
        state.login = true
      }
    },
  },
})

export const { setUserInfo, initUser, fetchUser } = userInfoSlice.actions
export default userInfoSlice.reducer
