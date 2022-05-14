import React from "react";
import {
  AppleOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import { SiderProps, Props } from "./SiderLayout.props";
import {
  ContentStyled,
  LogoWrapper,
  Layout,
  Menu,
  Sider,
  SiderContentLayout,
  StyledFooter,
} from "./SiderLayout.styled";

const SIDER_WIDTH = 100;

export const SiderLayout: SiderProps<Props> = (props) => {
  const { menuItems, children } = props;

  return (
    <Layout>
      <Sider width={SIDER_WIDTH}>
        <LogoWrapper>
          <AppleOutlined twoToneColor="#eb2f96" />
        </LogoWrapper>
        <Menu selectedKeys={["3"]} inlineIndent={8}>
          {menuItems.map(({ key, icon: Icon }) => (
            <Menu.Item key={key} icon={<Icon />} className="menu-item" />
          ))}
        </Menu>
        <StyledFooter>
          <QuestionCircleOutlined />
          <MessageOutlined />
          <AppstoreOutlined />
        </StyledFooter>
      </Sider>
      <SiderContentLayout>
        <ContentStyled>{children}</ContentStyled>
      </SiderContentLayout>
    </Layout>
  );
};
