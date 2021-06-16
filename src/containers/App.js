/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import { themesConfig } from "../themes/main";
import { Routes } from "../components/routes/Routes";
import { setCurrentPage } from "../components/navbar/store/current_page/CurrentPageActions";
import NavBar from "../components/navbar/NavBar";
import LogoElement from "../components/logo/Logo"

import "../themes/Main.scss";
import "animate.css/animate.compat.css";


const App = ({ _, history }) => {
  const state = useSelector((state) => ({
    theme: state.changeTheme.theme,
    // isLoading: state.showLoading.isLoading,
  }));
  const theme = createMuiTheme(themesConfig[state.theme]);
  const dispatch = useDispatch();

  useEffect(() => {
    let pathname;
    try {
      pathname = Routes.filter((el) => el.path === history.location.pathname)[0]
        .tabName;
    } catch {
      pathname = "Not Found";
    }
    document.title = pathname;
    dispatch(setCurrentPage(history.location.pathname));
  }, [history.location.pathname]);

  const routeComponents = Routes.map(({ path, Component }, key) => (
    <Route
      exact
      path={path}
      key={key}
      render={(props) => <Component {...props} />}
    />
  ));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <LogoElement />
      <Switch>{routeComponents}</Switch>
    </ThemeProvider>
  );
};

export default withRouter(App);
