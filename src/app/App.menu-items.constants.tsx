import React from "react";
import {
  FileTextOutlined,
  FolderOutlined,
  UsergroupAddOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { SiderLayoutsMenuItem } from "../app/layouts/SiderLayout";
import { PagesUrls } from "../app/namespace";

const MENU_ITEMS = (): SiderLayoutsMenuItem[] => {
  const items = [
    {
      key: 1,
      linkTo: PagesUrls.Help,
      linkText: "Help",
      icon: CustomerServiceOutlined,
    },
    {
      key: 2,
      linkTo: PagesUrls.Task,
      linkText: "Task",
      icon: FileTextOutlined,
    },
    {
      key: 3,
      linkTo: PagesUrls.Dashboard,
      linkText: "Dashboard",
      icon: FolderOutlined,
    },
    {
      key: 4,
      linkTo: PagesUrls.Users,
      linkText: "Users",
      icon: UsergroupAddOutlined,
    },
    {
      key: 5,
      linkTo: PagesUrls.Settings,
      linkText: "Settings",
      icon: SettingOutlined,
    },
  ];
  return items.filter(
    (item) => typeof item !== "boolean"
  ) as SiderLayoutsMenuItem[];
};

export interface WithMenuItemsProps {
  menuItems: SiderLayoutsMenuItem[];
}

export function withMenuItems<T extends WithMenuItemsProps = WithMenuItemsProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithMenuItems = (props: Omit<T, keyof WithMenuItemsProps>) => {
    const injectedProps = { menuItems: MENU_ITEMS() };
    return <WrappedComponent {...injectedProps} {...(props as T)} />;
  };
  ComponentWithMenuItems.displayName = `withMenuItems(${displayName})`;
  return ComponentWithMenuItems;
}
