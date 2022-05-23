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
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  openModal: (id: number) => void
  closeModal: (id: number) => void
  setUser: (user: Array<UserStateType>) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    cardFriends: state.FriendsPage.cardFriends
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addFriend: (id: number) => {
      dispatch(addFriendAC(id))
    },
    delFriend: (id: number) => {
      dispatch(delFriendAC(id))
    },
    openModal: (id: number) => {
      dispatch(openModalInFriendAC(id))
    },
    closeModal: (id: number) => {
      dispatch(closeModalInFriendAC(id))
    },
    setUser: (user: Array<UserStateType>) => {
      dispatch(setUsersAC(user))
    },
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer