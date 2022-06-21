import {v1} from "uuid";
import {profileAPI, userAPI} from "../api/api";

export const ADD_POST = 'ADD_POST';
export const UPDATE_WORDS_IN_POST = 'UPDATE_WORDS_IN_POST';
export const SET_PROFILE_USER = 'SET_PROFILE_USER';
export const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

export type  AddMessageInProfilePage = {
  user_name: string
  message: string
  countLike: number
  src: string
  id: string
}

let initialState = {
  messages: [] as Array<AddMessageInProfilePage>,
  updatePostInProfile: '',
  profile: null,
  status: ''
}
export type InitialStateInProfilePageType = typeof initialState

export const profilePageReducer = (state = initialState, action: ProfilePageReducerAT): InitialStateInProfilePageType => {


  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        user_name: state.profile!['fullName'],
        message: action.newEl,
        countLike: 0,
        src: state.profile!['photos']['small'],
        id: v1(),
      }
      return {
        ...state,
        messages: [newPost, ...state.messages]
      };
    }

    case UPDATE_WORDS_IN_POST: {
      return {
        ...state,
        updatePostInProfile: action.newWords
      };
    }

    case "SET_PROFILE_USER":
      return {
        ...state, profile: action.profile

      }
    case "SET_PROFILE_STATUS":
      return {
        ...state, status: action.status
      }
    default:
      return state
  }
}
export const addPostActionCreator = (post: string) => ({type: ADD_POST, newEl: post} as const)
export const updatePostInProfileActionCreator = (updateWords: string) => ({
  type: UPDATE_WORDS_IN_POST,
  newWords: updateWords
} as const)
export const setProfileUserAC = (profile: any) => ({type: SET_PROFILE_USER, profile: profile} as const)

export const getProfileStatusAC = (status: string) => ({type: SET_PROFILE_STATUS, status: status} as const)

type AddPostAT = ReturnType<typeof addPostActionCreator>
type UpdatePostInProfileAT = ReturnType<typeof updatePostInProfileActionCreator>
type SetProfileUserAT = ReturnType<typeof setProfileUserAC>
type GetProfileStatusAT = ReturnType<typeof getProfileStatusAC>
type ProfilePageReducerAT = AddPostAT | UpdatePostInProfileAT | SetProfileUserAT | GetProfileStatusAT

//Thunk
export const getProfileUserTC = (userID: number): any => {
  return (dispatch: any) => {
    userAPI.setProfileUser(userID)
      .then(data => dispatch(setProfileUserAC(data)))
  }
}
export const getProfileStatusTC = (userID: number): any => {
  return (dispatch: any) => {
    profileAPI.getProfileStatus(userID)
      .then(data => dispatch(getProfileStatusAC(data)))
  }
}

