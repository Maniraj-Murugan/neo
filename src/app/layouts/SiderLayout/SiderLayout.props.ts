import React from "react";
import { RouteComponentProps } from "react-router";
import { SettingsMenuItem } from "../../../types";

export type SiderLayoutsMenuItem = Pick<SettingsMenuItem, "key" | "icon">;

export type Props = RouteComponentProps & {
  children: React.ReactNode;
  menuItems: SiderLayoutsMenuItem[];
};

export type SiderProps<P> = React.FunctionComponent<P>;
