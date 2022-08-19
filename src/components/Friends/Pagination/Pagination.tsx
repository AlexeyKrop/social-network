import React from 'react';
import classes from "../Friends.module.css";

type PaginationPropsType = {
  totalUserCount: number
  pageSize: number
  onChangedPage: (pageNumber: number) => void
  currentPageNumber: number
}
export const Pagination = (props: PaginationPropsType) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={classes.pagination}>
      {pages.map(p => {
        return <span onClick={() => {
          props.onChangedPage(p)
        }}
                     className={props.currentPageNumber === p ? classes.selectedPage : ''}
                     key={p.toString()}>{p}</span>
      })}
    </div>
  );
};

