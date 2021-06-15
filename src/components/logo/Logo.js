import React from "react";

import { Link } from "react-scroll";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Logo from "../../assets/logo.png";
import LogoDark from "../../assets/logo_black.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 20,
    top: 0,
    left: 0,
    margin: theme.spacing(2),
  },
  logo: {
    width: "100px",
  },
}));

const LogoElement = (_, context) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Link
        className={classes.menuElement}
        to={"header"}
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
      >
        <img
          src={theme.palette.type === "dark" ? Logo : LogoDark}
          alt="logo"
          className={classes.logo}
        />
      </Link>
    </div>
  );
};

export default LogoElement;
