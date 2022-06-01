import React from 'react';
import classes from './Friends.module.css'
import CardFriend from './CardFriend/CardFriend';
import {UserStateType} from "../../Redux/friendsPageReducer";


export type cardFriendsPropsType = {
  cardFriends: Array<UserStateType>
  pageSize: number
  currentPageNumber: number
  totalUserCount: number
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  // openModal: (id: number) => void
  // closeModal: (id: number) => void
  setUser: (user: Array<UserStateType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalUserCount: number) => void
  onChangedPage: (pageNumber: number) => void

}

export function Friends(props: cardFriendsPropsType) {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }
  let Cards = props.cardFriends.map(item => <CardFriend key={item.id} addFriend={props.addFriend}
                                                        delFriend={props.delFriend}
                                                        user_avatar={item.photos}
                                                        user_name={item.name} id={item.id}
                                                        followed={item.followed}/>)
  return (
    <>
      <div className={classes.pagination}>
        {pages.map(p => {
          return <span onClick={() => {
            props.onChangedPage(p)
          }}
                       className={props.currentPageNumber === p ? classes.selectedPage : ''}
                       key={p.toString()}>{p}</span>
        })}
      </div>
      <div className={classes.list}>
        <div className={classes.row}>
          {Cards}
        </div>
      </div>
    </>
  )
}
