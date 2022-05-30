import React from 'react';
import classes from './Friends.module.css'
import CardFriend from './CardFriend/CardFriend';
import {UserStateType} from "../../Redux/friendsPageReducer";
import axios from "axios";


export type cardFriendsPropsType = {
  cardFriends: Array<UserStateType>
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  openModal: (id: number) => void
  closeModal: (id: number) => void
  setUser: (user: Array<UserStateType>) => void
}

class Friends extends React.Component<cardFriendsPropsType> {
  // constructor(props: cardFriendsPropsType) {
  //   super(props);
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //     .then((response) => {
  //       // обработка успешного запроса
  //       this.props.setUser(response.data.items)
  //     })
  // }

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        // обработка успешного запроса
        this.props.setUser(response.data.items)
      })
  }

  render() {
    console.log(this.props.cardFriends.map(c => console.log(c)))
    let Cards = this.props.cardFriends.map(item => <CardFriend key={item.id} addFriend={this.props.addFriend}
                                                               delFriend={this.props.delFriend}
                                                               openModal={this.props.openModal}
                                                               closeModal={this.props.closeModal}
                                                               user_name={item.name} id={item.id}
                                                               followed={item.followed}/>)
    return <div className={classes.list}>
      <div className={classes.row}>
        {Cards}
      </div>
    </div>
  }


  // props.setUSer([
  //   {
  //     cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
  //     cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
  //     user_name: 'Jose Marroquin',
  //     id: v1(),
  //     friendStatus: true,
  //     sendMessageStatus: false
  //   },
  //   {
  //     cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
  //     cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
  //     user_name: 'Myrtle Lewis',
  //     id: v1(),
  //     friendStatus: true,
  //     sendMessageStatus: false
  //   },
  //   {
  //     cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
  //     cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
  //     user_name: 'Howard Tam',
  //     id: v1(),
  //     friendStatus: false,
  //     sendMessageStatus: false
  //   },
  //   {
  //     cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
  //     cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
  //     user_name: 'Kimberly Blum',
  //     id: v1(),
  //     friendStatus: true,
  //     sendMessageStatus: false
  //   },
  //   {
  //     cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
  //     cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
  //     user_name: 'Mary Mercado',
  //     id: v1(),
  //     friendStatus: false,
  //     sendMessageStatus: false
  //   },
  //   {
  //     cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
  //     cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
  //     user_name: 'Robert Ward',
  //     id: v1(),
  //     friendStatus: false,
  //     sendMessageStatus: false
  //   }
  // ])
}

export default Friends