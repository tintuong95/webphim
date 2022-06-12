import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,ProfileOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { ReactElement, useState } from "react";
import { Route, Switch } from "react-router-dom";
import {history} from "../index"
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("MOVIE.VN", "0"),
  getItem("Film", "1", <DesktopOutlined />),
  getItem("Author", "2",  <VideoCameraOutlined />),
  getItem("User", "3", <UserOutlined />),
  getItem("Catetory", "4",<ProfileOutlined />),
  getItem("Support", "5", <TeamOutlined />),
];


function handleLink(key:number):void{
    if(key===1) history.push("/film")
    if(key===2) history.push("/author")
    if(key===3) history.push("/user")
    if(key===4) history.push("/category")
  
}


export function DashBoard(props: any): ReactElement {
  const [collapsed, setCollapsed] = useState(true);
  const { Component, ...children } = props;

  return (
    <Route
      {...children}
      render={(propsRouter) => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <div className="logo" />
              <Menu onClick={(e)=>{handleLink(Number(e.key))}} theme="dark" mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
              <Content style={{ margin: "0 16px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Component {...propsRouter}/>
                </div>
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
