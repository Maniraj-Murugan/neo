import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "app";
import "./App.css";

export const App = () => (
  <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </>
);
