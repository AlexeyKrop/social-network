import React from 'react';
import {Pagination} from 'antd';

type PaginationPropsType = {
  totalUserCount: number
  pageSize: number
  onChangedPage: (pageNumber: number) => void
  currentPageNumber: number
}
export const PaginationItems = (props: PaginationPropsType) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  // let pages = []
  // for (let i = 1; i < pagesCount; i++) {
  //   pages.push(i)
  // }

  const onChangePageNumber = (page: number, pageSize: number) => {
    props.onChangedPage(page)
  }
  return (
    <Pagination onChange={(page, pageSize) => onChangePageNumber(page, pageSize)} defaultCurrent={1}
                total={pagesCount} onShowSizeChange={(current, size) => onChangePageNumber(current, size)}/>
    // <div className={classes.pagination}>
    //   {pages.map(p => {
    //     return <span onClick={() => {
    //       props.onChangedPage(p)
    //     }}
    //                  className={props.currentPageNumber === p ? classes.selectedPage : ''}
    //                  key={p.toString()}>{p}</span>
    //   })}
    // </div>
  );
};

