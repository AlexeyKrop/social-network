import React from 'react';
import s from './Preloader.module.css'
import {Progress, Space, Spin} from "antd";

export const Preloader = () => {
  // return (
  //   <div className={s.loader}/>
  // );
  return (
    <Space className={s.load} size="middle">
      <Spin size="large"/>
    </Space>
    // <Progress percent={100}/>
  )
};

