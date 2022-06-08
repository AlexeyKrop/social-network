import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'a3194ef5-a5fe-47c5-b463-8be5589a0929'
  }
})

const baseURL = `https://social-network.samuraijs.com/api/1.0/`
export const userAPI = {
  getUser(currentPageNumber: number, pageSize: number) {
    return instance.get(baseURL + `users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data)
  },
  deleteUser(id: number) {
    return instance.delete(baseURL + `follow/${id}`).then(response => response.data)
  },
  addUser(id: number) {
    return instance.post(baseURL + `follow/${id}`, {}).then(response => response.data)
  }
}
// export const getUser = (currentPageNumber: number, pageSize: number) => {
//   return instance.get(baseURL + `users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data)
// }
// export const deleteUser = (id: number) => {
//   return instance.delete(baseURL + `follow/${id}`).then(response => response.data)
// }
// export const addUser = (id: number) => {
//   return instance.post(baseURL + `follow/${id}`, {}).then(response => response.data)
// }