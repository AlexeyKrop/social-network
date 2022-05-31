import {connect} from "react-redux";
import Friends from "./Friends";
import {
  addFriendAC,
  closeModalInFriendAC,
  delFriendAC,
  openModalInFriendAC, setCurrentPageNumberAC, setTotalUserCountAC, setUsersAC, UserStateType
} from "../../Redux/friendsPageReducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  cardFriends: Array<UserStateType>
  currentPageNumber: number
  pageSize: number
  totalUserCount: number
}
type mapDispatchToPropsType = {
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  openModal: (id: number) => void
  closeModal: (id: number) => void
  setUser: (user: Array<UserStateType>) => void
  setCurrentPage: (currentPageNumber: number) => void
  setTotalUserCount: (totalUserCount: number) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    cardFriends: state.FriendsPage.cardFriends,
    pageSize: state.FriendsPage.pageSize,
    currentPageNumber: state.FriendsPage.currentPageNumber,
    totalUserCount: state.FriendsPage.totalUserCount
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
    setCurrentPage: (currentPageNumber: number) => {
      dispatch(setCurrentPageNumberAC(currentPageNumber))
    },
    setTotalUserCount: (totalUserCount: number) => {
      dispatch(setTotalUserCountAC(totalUserCount))
    }

  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer