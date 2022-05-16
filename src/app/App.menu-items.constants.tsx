import React from "react";
import {
  FileTextOutlined,
  FolderOutlined,
  UsergroupAddOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { SiderLayoutsMenuItem } from "../app/layouts/SiderLayout";

const MENU_ITEMS = (): SiderLayoutsMenuItem[] => {
  const items = [
    {
      key: 1,
      icon: CustomerServiceOutlined,
    },
    {
      key: 2,
      icon: FileTextOutlined,
    },
    {
      key: 3,
      icon: FolderOutlined,
    },
    {
      key: 4,
      icon: UsergroupAddOutlined,
    },
    {
      key: 5,
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

export function withMenuItems<
  T extends WithMenuItemsProps = WithMenuItemsProps
>(WrappedComponent: React.ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithMenuItems = (props: Omit<T, keyof WithMenuItemsProps>) => {
    const injectedProps = { menuItems: MENU_ITEMS() };
    return <WrappedComponent {...injectedProps} {...(props as T)} />;
  };
  ComponentWithMenuItems.displayName = `withMenuItems(${displayName})`;
  return ComponentWithMenuItems;
}
