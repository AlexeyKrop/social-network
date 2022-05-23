import {connect} from "react-redux";
import Friends from "./Friends";
import {
  addFriendAC,
  closeModalInFriendAC,
  delFriendAC,
  openModalInFriendAC, setUsersAC, UserStateType
} from "../../Redux/friendsPageReducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  cardFriends: Array<UserStateType>
}
type mapDispatchToPropsType = {
  addFriend: (id: string) => void
  delFriend: (id: string) => void
  openModal: (id: string) => void
  closeModal: (id: string) => void
  setUser: (user: Array<UserStateType>) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    cardFriends: state.FriendsPage.cardFriends
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addFriend: (id: string) => {
      dispatch(addFriendAC(id))
    },
    delFriend: (id: string) => {
      dispatch(delFriendAC(id))
    },
    openModal: (id: string) => {
      dispatch(openModalInFriendAC(id))
    },
    closeModal: (id: string) => {
      dispatch(closeModalInFriendAC(id))
    },
    setUser: (user: Array<UserStateType>) => {
      dispatch(setUsersAC(user))
    },
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer