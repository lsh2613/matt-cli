export const USER = "USER";
export const setUser = user => ({ type: USER, user })

const initUser = {
  userId: 0,
  insId: 0
}

const setUserInfo = (state = initUser, action) => {
  return {
    ...state,
    userId: action.studentId,
    insId: action.instructorId
  }
}