import {AppStateType} from "./redux-store";

export const getCardFriends = (state: AppStateType) => {
  return state.FriendsPage.cardFriends
}
export const getPageSize = (state: AppStateType) => {
  return state.FriendsPage.pageSize
}
export const getCurrentPageNumber = (state: AppStateType) => {
  return state.FriendsPage.currentPageNumber
}
export const getTotalUserCount = (state: AppStateType) => {
  return state.FriendsPage.totalUserCount
}
export const getPreloader = (state: AppStateType) => {
  return state.FriendsPage.preloader
}