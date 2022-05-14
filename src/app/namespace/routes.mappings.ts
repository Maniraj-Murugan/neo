import { Pages } from "./routes.enum";

export type PageTypes = {
  [page in Pages]: string;
};

export const PagesUrls: PageTypes = {
  Help: "/help",
  Task: "/task",
  Dashboard: "/",
  Users: "/users",
  Settings: "/settings",
};
