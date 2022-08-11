import axios from 'axios';

// 일반적인 axios 인스턴스 사용시에 사용
function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
  });
}


export const user = createInstance("/user");
export const login = createInstance("/login");