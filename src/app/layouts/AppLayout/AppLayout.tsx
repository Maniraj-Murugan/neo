import React, { FC } from "react";
import { Layout } from "antd";
import { AppLayoutProps } from "./AppLayout.types";
import { LayoutComponent } from "./AppLayoutStyle";

const { Content } = Layout;

export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <LayoutComponent>
    <Content>{children}</Content>
  </LayoutComponent>
);
