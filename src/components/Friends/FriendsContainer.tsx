import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppDispatch, AppStateType} from "../../Redux/redux-store";
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {
  addUserTC,
  delUserTC,
  getUsersTC,
  setCurrentPageNumberAC,
  setTotalUserCountAC,
  UserStateType
} from "../../Redux/friendsPageReducer";
import {Redirect} from "react-router-dom";

type mapStateToPropsType = {
  cardFriends: Array<UserStateType>
  currentPageNumber: number
  pageSize: number
  totalUserCount: number
  preloader: boolean
  auth: boolean
}
type mapDispatchToPropsType = {
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  setCurrentPage: (currentPageNumber: number) => void
  setTotalUserCount: (totalUserCount: number) => void
  getUsers: (currentPageNumber: number, pageSize: number) => void
}
type FriendsContainerType = mapStateToPropsType & mapDispatchToPropsType

class FriendsContainer extends React.Component<FriendsContainerType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPageNumber, this.props.pageSize)
  }

  onChangedPage = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    if (!this.props.auth) return <Redirect to={'/login'}/>
    return (
      <>{this.props.preloader ? <Preloader/> : null}
        <Friends
          cardFriends={this.props.cardFriends}
          currentPageNumber={this.props.currentPageNumber}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          addFriend={this.props.addFriend}
          delFriend={this.props.delFriend}
          setCurrentPage={this.props.setCurrentPage}
          setTotalUserCount={this.props.setTotalUserCount}
          onChangedPage={this.onChangedPage}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    cardFriends: state.FriendsPage.cardFriends,
    pageSize: state.FriendsPage.pageSize,
    currentPageNumber: state.FriendsPage.currentPageNumber,
    totalUserCount: state.FriendsPage.totalUserCount,
    preloader: state.FriendsPage.preloader,
    auth: state.Authorization.isAuth
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
  return {

    addFriend: (id: number) => {
      dispatch(addUserTC(id))
    },

    delFriend: (id: number) => {
      dispatch(delUserTC(id))
    },

    setCurrentPage: (currentPageNumber: number) => {
      dispatch(setCurrentPageNumberAC(currentPageNumber))
    },

    setTotalUserCount: (totalUserCount: number) => {
      dispatch(setTotalUserCountAC(totalUserCount))
    },

    getUsers: (currentPageNumber: number, pageSize: number) => {
      dispatch((getUsersTC(currentPageNumber, pageSize)))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
