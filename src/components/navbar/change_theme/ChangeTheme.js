import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { setTheme } from "../store/choose_theme/ChooseThemeActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const ChangeTheme = (_, context) => {
  const classes = useStyles();
  const state = useSelector((state) => ({
    theme: state.changeTheme.theme,
  }));
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(state.theme !== "legacy");

  const selectTheme = (event) => {
    const theme = event.target.checked ? "light" : "legacy";
    dispatch(setTheme(theme));
    setchecked(event.target.checked);
  };
  return (
    <div className={classes.root}>
      <Switch checked={checked} onChange={selectTheme} color="secondary" />
    </div>
  );
};

ChangeTheme.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default ChangeTheme;
