import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { withRouter } from "react-router";

import { SiderLayout } from "../../layouts/SiderLayout";
import { withMenuItems } from "../../App.menu-items.constants";

const ConnectedSiderLayout = withMenuItems(withRouter(SiderLayout));

interface Props extends RouteProps {
  component: RouteProps["component"];
}

export const RouteAppLayout: FC<Props> = ({
  component: Component,
  ...rest
}) => {
  const route = (
    <Route
      {...rest}
      render={(props) => (Component ? <Component {...props} /> : null)}
    />
  );

  return <ConnectedSiderLayout> {route} </ConnectedSiderLayout>;
};
