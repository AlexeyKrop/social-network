import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'a3194ef5-a5fe-47c5-b463-8be5589a0929'
  }
})

export const userAPI = {
  getUser(currentPageNumber: number, pageSize: number) {
    return instance.get(`users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data)
  },
  deleteUser(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
  addUser(id: number) {
    return instance.post(`follow/${id}`, {}).then(response => response.data)
  }
}
