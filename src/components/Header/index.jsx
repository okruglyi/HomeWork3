import React from "react";
import cn from "classnames";
import s from "./styles.module.css";
import {Layout, Menu} from "antd";

const { Header } = Layout;

export const HeaderComponent = ({children}) => {
  return (
      <Header className="header" style={{ padding: '0 calc(50% - 650px)'}}>
          {children}
      </Header>
  );
};
