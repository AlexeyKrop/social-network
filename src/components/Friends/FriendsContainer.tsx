import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType, TypedDispatch} from "../../Redux/redux-store";
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
import {compose} from "redux";
import {
  getCardFriends,
  getCurrentPageNumber,
  getPageSize,
  getPreloader,
  getTotalUserCount
} from "../../Redux/friends-selectors";

type mapStateToPropsType = {
  cardFriends: Array<UserStateType>
  currentPageNumber: number
  pageSize: number
  totalUserCount: number
  preloader: boolean
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

  onChangedPage = (pageNumber: number, pageSize = 12) => {
    this.props.getUsers(pageNumber, pageSize)
  }

  render() {

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
    cardFriends: getCardFriends(state),
    pageSize: getPageSize(state),
    currentPageNumber: getCurrentPageNumber(state),
    totalUserCount: getTotalUserCount(state),
    preloader: getPreloader(state),
  }
}

const mapDispatchToProps = (dispatch: TypedDispatch): mapDispatchToPropsType => {
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
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
)(FriendsContainer)
