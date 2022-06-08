import axios from "axios";

export const getUser = (currentPageNumber: number, pageSize: number) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${pageSize}`, {
    withCredentials: true
  })
}