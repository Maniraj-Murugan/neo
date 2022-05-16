import styled from "styled-components";
import { Badge, Layout as AntLayout, Menu as AntMenu } from "antd";
import { colors } from "ui/elements";

const { Content, Sider: AntSider } = AntLayout;

export const Menu = styled(AntMenu)`
  flex-grow: 1;
  padding-left: 0;
  background: ${colors.primary};
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    padding: 8px;
    font-size: 12px;
    margin: 0;
    user-select: none;
    span {
      line-height: normal;
      text-align: center;
      width: 100%;
      margin-top: 8px;
    }
  }
  .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-left: 3px solid #fff;
  }
  .anticon {
    color: #fff;
    font-size: 25px !important;
  }
`;

export const MenuItem = styled(Menu.Item)`
  &.ant-dropdown-menu-item {
    display: flex;
    align-items: center;
  }
`;

export const MenuItemContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  padding-top: 16px;
  padding-bottom: 30px;
  .anticon {
    color: #fff;
    font-size: 30px !important;
  }
`;

export const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

export const SiderContentLayout = styled(Layout)`
  margin-left: 100px;
`;

export const Sider = styled(AntSider)`
  box-shadow: 2px 0px 4px rgba(28, 43, 101, 0.1);
  background-color: ${colors.primary};
  z-index: 100;
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
  overflow-x: hidden;
`;

export const ContentStyled = styled(Content)`
  display: flex;
  flex-direction: column;
`;

export const StyledProfile = styled.div`
  width: 100px;
  text-align: center;
  padding-bottom: 16px;
`;

export const StyledProfileBadge = styled(Badge)`
  sup {
    width: 12px;
    height: 12px;
  }
`;

export const StyledFooter = styled(AntMenu)`
  display: grid;
  grid-gap: 25px;
  background: ${colors.primary};
  .anticon {
    color: #fff;
    font-size: 25px !important;
  }
`;
