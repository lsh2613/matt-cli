import axios from 'axios'
// 일반적인 axios 인스턴스 사용시에 사용
function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
  })
}

function createInstaceWithAuth(url) {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
    withCredentials: true,
  })
}

export const user = createInstaceWithAuth('/user')
export const login = createInstaceWithAuth('/login')
export const class_ = createInstaceWithAuth('/class')
export const tag = createInstaceWithAuth('/tagInfo')
export const instructor = createInstaceWithAuth('/instructor')
export const waiting = createInstaceWithAuth('/waitingStudent')
export const logout = createInstaceWithAuth('/logout')
export const insReview = createInstaceWithAuth('/instructor/review')
export const cs = createInstaceWithAuth('/class/students')
