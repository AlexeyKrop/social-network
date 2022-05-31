import {connect} from "react-redux";
import {Friends, cardFriendsPropsType} from "./Friends";
import {
  addFriendAC,
  closeModalInFriendAC,
  delFriendAC,
  openModalInFriendAC, setCurrentPageNumberAC, setTotalUserCountAC, setUsersAC, UserStateType
} from "../../Redux/friendsPageReducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import CardFriend from "./CardFriend/CardFriend";
import classes from "./Friends.module.css";

type mapStateToPropsType = {
  cardFriends: Array<UserStateType>
  currentPageNumber: number
  pageSize: number
  totalUserCount: number
}
type mapDispatchToPropsType = {
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  // openModal: (id: number) => void
  // closeModal: (id: number) => void
  setUser: (user: Array<UserStateType>) => void
  setCurrentPage: (currentPageNumber: number) => void
  setTotalUserCount: (totalUserCount: number) => void
}

class FriendsContainer extends React.Component<any> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        // обработка успешного запроса
        this.props.setUser(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      })
  }

  onChangedPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        // обработка успешного запроса
        this.props.setUser(response.data.items)
      })
  }

  render() {

    return (
      <Friends
        cardFriends={this.props.cardFriends}
        currentPageNumber={this.props.currentPageNumber}
        pageSize={this.props.pageSize}
        totalUserCount={this.props.totalUserCount}
        addFriend={this.props.addFriend}
        delFriend={this.props.delFriend}
        setUser={this.props.setUser}
        setCurrentPage={this.props.setCurrentPage}
        setTotalUserCount={this.props.setTotalUserCount}
        onChangedPage={this.onChangedPage}
      />
    )
  }
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
    // openModal: (id: number) => {
    //   dispatch(openModalInFriendAC(id))
    // },
    // closeModal: (id: number) => {
    //   dispatch(closeModalInFriendAC(id))
    // },
    setUser: (user: Array<UserStateType>) => {
      dispatch(setUsersAC(user))
    },
    setCurrentPage: (currentPageNumber: number) => {
      dispatch(setCurrentPageNumberAC(currentPageNumber))
    },
    setTotalUserCount: (totalUserCount: number) => {
      dispatch(setTotalUserCountAC(totalUserCount))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
