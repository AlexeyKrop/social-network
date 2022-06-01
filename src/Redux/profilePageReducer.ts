import {v1} from "uuid";

export const ADD_POST = 'ADD_POST';
export const UPDATE_WORDS_IN_POST = 'UPDATE_WORDS_IN_POST';
export const SET_PROFILE_USER = 'SET_PROFILE_USER';

// type AddPostInProfilePageAT = AddPostAT | UpdateWordsInPostAT
// export type AddPostAT = {
//   type: 'ADD_POST',
//   newEl: string
// }
// export type UpdateWordsInPostAT = {
//   type: 'UPDATE_WORDS_IN_POST',
//   updateWords: string
// }
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
  profile: null
}
type InitialStateInProfilePageType = typeof initialState

export const profilePageReducer = (state = initialState, action: ProfilePageReducerAT): InitialStateInProfilePageType => {
  if (state.profile) {
    console.log(state.profile['photos']['small'])
  }

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

type AddPostAT = ReturnType<typeof addPostActionCreator>
type UpdatePostInProfileAT = ReturnType<typeof updatePostInProfileActionCreator>
type setProfileUserAT = ReturnType<typeof setProfileUserAC>


type ProfilePageReducerAT = AddPostAT | UpdatePostInProfileAT | setProfileUserAT

