import React, { FC } from "react";

import { Dashboard } from "../../routes";
import { PagesUrls } from "../namespace";
import { RouteAppLayout } from "./RouteLayout";

export const AppRoutes: FC = () => {
  return (
    <RouteAppLayout
      path={PagesUrls.Dashboard}
      component={Dashboard}
    />
  );
};
