import axios from "axios";
import {UserStateType} from "../Redux/friendsPageReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'e740762a-947d-4fd0-b06d-9b4eb349c99e'
  }
})

type ResponseType = {
  items: Array<UserStateType>
  totalCount: number
  error: null
}
export const userAPI = {
  getUser(currentPageNumber: number, pageSize: number) {
    return instance.get<ResponseType>(`users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data)
  },
  deleteUser(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
  addUser(id: number) {
    return instance.post(`follow/${id}`, {}).then(response => response.data)
  },
  setProfileUser(userID: number) {
    return instance.get(`profile/${userID}`).then(response => response.data)
  },
}

export const authMe = {
  me() {
    return instance.get('auth/me')
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post(`/auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`/auth/login`)
  }
}

export const profileAPI = {
  getProfileStatus(userID: number) {
    return instance.get(`profile/status/${userID}`).then(response => response.data)
  },
  updateProfileStatus(status: string) {
    return instance.put(`/profile/status`, {status})
  }
}

// export type ResponseType<D = {}> = {
//   resultCode: number
//   messages: Array<string>
//   fieldsErrors: Array<string>
//   data: D
// }
