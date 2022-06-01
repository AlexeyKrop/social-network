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
}
type InitialStateInProfilePageType = typeof initialState

export const profilePageReducer = (state = initialState, action: ProfilePageReducerAT): InitialStateInProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        user_name: "Julie R. Morley",
        message: action.newEl,
        countLike: 0,
        src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-16.jpg',
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

    default:
      return state
  }
}
export const addPostActionCreator = (post: string) => ({type: ADD_POST, newEl: post} as const)

export const updatePostInProfileActionCreator = (updateWords: string) => ({
  type: UPDATE_WORDS_IN_POST,
  newWords: updateWords
} as const)
export const setProfileUserAC = () => ({type: SET_PROFILE_USER})

type AddPostAT = ReturnType<typeof addPostActionCreator>
type UpdatePostInProfileAT = ReturnType<typeof updatePostInProfileActionCreator>


type ProfilePageReducerAT = AddPostAT | UpdatePostInProfileAT

