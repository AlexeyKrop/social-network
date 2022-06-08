import axios from "axios";

export const getUser = (currentPageNumber: number, pageSize: number) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${pageSize}`, {
    withCredentials: true
  }).then(response => response.data)
}
export const deleteUser = (id: number, apiKey: string) => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
    withCredentials: true,
    headers: {
      'API-KEY': apiKey
    }
  }).then(response => response.data)
}
export const addUser = (id: number, apiKey: string) => {
  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      'API-KEY': apiKey
    }
  }).then(response => response.data)
}