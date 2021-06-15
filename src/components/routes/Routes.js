import HomePage from "../../containers/home_page/HomePage";
import NotFound from "../not_found/NotFound"


export const Routes = [
  {
    name: "HOME",
    tabName: "Nikita Atroshenko - Web Developer",
    type: "main",
    path: "/",
    Component: HomePage,
  },
  {
    name: "Not Found",
    type: "notInTheMenu",
    path: "*",
    Component: NotFound,
  },
];
