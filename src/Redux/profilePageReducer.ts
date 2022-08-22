import {v1} from "uuid";
import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";

export const ADD_POST = 'profile/ADD_POST';
export const UPDATE_WORDS_IN_POST = 'profile/UPDATE_WORDS_IN_POST';
export const SET_PROFILE_USER = 'profile/SET_PROFILE_USER';
export const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';

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

    case "profile/SET_PROFILE_USER":
      return {
        ...state, profile: action.profile
      }
    case "profile/SET_PROFILE_STATUS":
      return {
        ...state, status: action.status
      }
    default:
      return state
  }
}
export const addPostActionCreator = (post: string) => ({type: ADD_POST, newEl: post} as const)

export const setProfileUserAC = (profile: any) => ({type: SET_PROFILE_USER, profile: profile} as const)

export const setProfileStatusAC = (status: string) => ({type: SET_PROFILE_STATUS, status: status} as const)


type AddPostAT = ReturnType<typeof addPostActionCreator>

type SetProfileUserAT = ReturnType<typeof setProfileUserAC>
type GetProfileStatusAT = ReturnType<typeof setProfileStatusAC>

type ProfilePageReducerAT =
  | AddPostAT
  | SetProfileUserAT
  | GetProfileStatusAT


//Thunk
export const getProfileUserTC = (userID: number): AppThunk => {
  return (dispatch: Dispatch) => {
    userAPI.setProfileUser(userID)
      .then(data => {
        dispatch(setProfileUserAC(data))
      })
  }
}
export const getProfileStatusTC = (userID: number): AppThunk => {
  return (dispatch: Dispatch) => {
    profileAPI.getProfileStatus(userID)
      .then(status => dispatch(setProfileStatusAC(status)))
  }
}
export const updateProfileStatusTC = (status: string): AppThunk => {
  return (dispatch: Dispatch) => {
    profileAPI.updateProfileStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setProfileStatusAC(status))
        }
      })
  }
}

