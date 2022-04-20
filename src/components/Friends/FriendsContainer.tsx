import {connect} from "react-redux";
import Friends from "./Friends";
import {addFriendAC, delFriendAC} from "../../Redux/friendsPageReducer";

const mapStateToProps = (state: any) => {
  return {
    cardFriends: state.FriendsPage.cardFriends
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    addFriend: (id: string) => {
      dispatch(addFriendAC(id))
    },
    delFriend: (id: string) => {
      dispatch(delFriendAC(id))
    },
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer