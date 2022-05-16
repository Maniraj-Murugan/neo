import React, { FC } from "react";

import { Dashboard } from "../../routes";
import { RouteAppLayout } from "./RouteLayout";

export const AppRoutes: FC = () => {
  return <RouteAppLayout path={"/"} component={Dashboard} />;
};
