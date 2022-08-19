import React from 'react';
import classes from './Friends.module.css'
import CardFriend from './CardFriend/CardFriend';
import {UserStateType} from "../../Redux/friendsPageReducer";
import {Pagination} from "./Pagination/Pagination";


export type cardFriendsPropsType = {
  cardFriends: Array<UserStateType>
  pageSize: number
  currentPageNumber: number
  totalUserCount: number
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  // openModal: (id: number) => void
  // closeModal: (id: number) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalUserCount: number) => void
  onChangedPage: (pageNumber: number) => void

}

export function Friends(props: cardFriendsPropsType) {
  let Cards = props.cardFriends.map(item => <CardFriend key={item.id} addFriend={props.addFriend}
                                                        delFriend={props.delFriend}
                                                        user_avatar={item.photos}
                                                        user_name={item.name} id={item.id}
                                                        followed={item.followed}/>)
  return (
    <>
      <Pagination totalUserCount={props.totalUserCount} pageSize={props.pageSize} onChangedPage={props.onChangedPage}
                  currentPageNumber={props.currentPageNumber}/>
      <div className={classes.list}>
        <div className={classes.row}>
          {Cards}
        </div>
      </div>
    </>
  )
}
