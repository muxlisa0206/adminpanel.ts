import React, { useState } from 'react';
import { MdLocalMovies } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { BsPersonVideo2 } from "react-icons/bs";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider className='h-screen' trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <TeamOutlined />,
              label: <NavLink to={"/admin/actor"}>Actor</NavLink>,
            },
            {
                key: '2',
                icon: <MdLocalMovies />,
                label: <NavLink to={"/admin/movie"}>Movie</NavLink>,
            },            
            {
                key: '3',
                icon: <UserOutlined />,
                label: <NavLink to={"/admin/director"}>Dorector</NavLink>,
            },            
            {
                key: '4',
                icon: <BiMoviePlay />,
                label: <NavLink to={"/admin/ganre"}>Ganre</NavLink>,
            },
            {
                key: '5',
                icon: <TbCategory />,
                label: <NavLink to={"/admin/category"}>Category</NavLink>,
            },
            {
              key: '6',
              icon: <BsPersonVideo2 />,
              label: <NavLink to={"/admin/movie-actor"}>Movie and Actor</NavLink>,
            },
            {
              key: '7',
              icon: <TbCategory />,
              label: <NavLink to={"/admin/movie-category"}>Movie and Category</NavLink>,
            },
            {
              key: '8',
              icon: <BsPersonVideo2 />,
              label: <NavLink to={"/admin/movie-director"}>Movie and Director</NavLink>,
            },
            {
              key: '9',
              icon: <BiCameraMovie />,
              label: <NavLink to={"/admin/movie-genre"}>Movie and Genre</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "80vh",
            overflowY: 'auto'
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;