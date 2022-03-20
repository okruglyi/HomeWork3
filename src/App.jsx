import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./components/Header";
import { Layout, Menu, Breadcrumb } from 'antd';
import {PostsList} from "./components/PostsList";
import {postData} from "./posts";
import {BreadcrumbComponent} from "./components/Breadcrumb";
import {ButtonComponent} from "./components/Button";

const { Content, Footer } = Layout;
const menuItem = ['Главная', 'О нас'];
const breadcrumbItem = ['Главная', 'Все посты'];

export const App = () => {
    const [posts, postsSet] = useState(postData);
    const handleCreatePost = () => {
        return console.log('Есть контакт');
    }

  return (
      <Layout className="layout">
          <HeaderComponent>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[null]}>
                  { menuItem.map(( item, index) => {
                      const key = index + 1;
                      return <Menu.Item key={key}>
                          <a href="">
                              {item}
                          </a>
                      </Menu.Item>;
                  })}
              </Menu>
          </HeaderComponent>
          <Content className="content">
              <BreadcrumbComponent className="breadcrumb">
                  {
                      breadcrumbItem.map(( item, index) => {
                      const key = index + 1;
                      return <Breadcrumb.Item key={key}>{item}</Breadcrumb.Item>;
                  })}
              </BreadcrumbComponent>
              <div className="site-layout-content">
                  <div className='button'>
                      <ButtonComponent handleClick={handleCreatePost} />
                  </div>
                  <PostsList entity={posts}/>
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Создано при помощи React и библиотеки Ant Design ©2022</Footer>
      </Layout>
  );
};
