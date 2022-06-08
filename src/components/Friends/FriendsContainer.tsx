import {connect} from "react-redux";
import {Friends} from "./Friends";
import {
  addFriendAC,
  delFriendAC,
  setCurrentPageNumberAC,
  setTogglePreloaderAC,
  setTotalUserCountAC,
  setUsersAC,
  UserStateType
} from "../../Redux/friendsPageReducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {getUser} from "../../api/api";

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
  setUser: (user: Array<UserStateType>) => void
  setCurrentPage: (currentPageNumber: number) => void
  setTotalUserCount: (totalUserCount: number) => void
  setTogglePreloader: (preloader: boolean) => void
}
type FriendsContainerType = mapStateToPropsType & mapDispatchToPropsType

class FriendsContainer extends React.Component<FriendsContainerType> {

  componentDidMount() {
    this.props.setTogglePreloader(true)
    getUser(this.props.currentPageNumber, this.props.pageSize)
      .then((response) => {
        this.props.setTogglePreloader(false)
        // обработка успешного запроса
        this.props.setUser(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      })
  }

  onChangedPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setTogglePreloader(true)
    getUser(pageNumber, this.props.pageSize)
      .then((response) => {
        // обработка успешного запроса
        this.props.setTogglePreloader(false)
        this.props.setUser(response.data.items)
      })

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
          setUser={this.props.setUser}
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

    setUser: (user: Array<UserStateType>) => {
      dispatch(setUsersAC(user))
    },

    setCurrentPage: (currentPageNumber: number) => {
      dispatch(setCurrentPageNumberAC(currentPageNumber))
    },

    setTotalUserCount: (totalUserCount: number) => {
      dispatch(setTotalUserCountAC(totalUserCount))
    },

    setTogglePreloader: (preloader: boolean) => {
      dispatch((setTogglePreloaderAC(preloader)))
    }
    ,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
