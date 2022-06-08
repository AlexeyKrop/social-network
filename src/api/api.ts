import axios from "axios";

const instance = axios.create({
  withCredentials: true
})

const baseURL = `https://social-network.samuraijs.com/api/1.0/`
export const getUser = (currentPageNumber: number, pageSize: number) => {
  return instance.get(baseURL + `users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data)
}
export const deleteUser = (id: number, apiKey: string) => {
  return axios.delete(baseURL + `follow/${id}`, {
    withCredentials: true,
    headers: {
      'API-KEY': apiKey
    }
  }).then(response => response.data)
}
export const addUser = (id: number, apiKey: string) => {
  return axios.post(baseURL + `follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      'API-KEY': apiKey
    }
  }).then(response => response.data)
}