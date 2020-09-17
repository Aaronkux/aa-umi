import React from 'react';
import { history } from 'umi';
import { Menu } from 'antd';
import { ScheduleOutlined, GoldOutlined } from '@ant-design/icons';

const clickHander = (linkPath: string, currentPath: string) => {
  return function() {
    if (currentPath !== linkPath) history.push(linkPath);
  };
};

export default function Navbar() {
  return (
    <>
      <div style={{ color: '#fff' }}>上古工具箱</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[history.location.pathname.slice(1)]}
      >
        <Menu.Item
          key="schedule"
          onClick={clickHander('/schedule', history.location.pathname)}
          icon={<ScheduleOutlined />}
        >
          时间表
        </Menu.Item>
        <Menu.Item
          key="trade"
          onClick={clickHander('/trade', history.location.pathname)}
          icon={<GoldOutlined />}
        >
          贸易
        </Menu.Item>
      </Menu>
    </>
  );
}
