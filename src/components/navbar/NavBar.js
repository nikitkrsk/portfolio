import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SelectLanguage from "./select_language/SelectLanguage";
import ChangeTheme from "./change_theme/ChangeTheme";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 20,
    top: 0,
    right: 0,
    bottom: 0,
    [theme.breakpoints.down("md")]: {
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  content:{
    [theme.breakpoints.down("md")]: {
     background: theme.palette.primary.main,
    },
  },
  menuHolder: {
    position: "fixed",
    top: 0,
    right: 0,
    width: 0,
    // left: 0,
    zIndex: -1,
    bottom: 0,
    background: theme.palette.primary.main,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
  },
  openMenu: {
    width: "250px",
    boxShadow: `-9px 0px 23px 0px ${theme.palette.background.default}`,
  },
  menuItems: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity .25s",
  },
  showText: {
    opacity: 1,
  },
  activeMenu: {
    color: theme.palette.secondary.main,
  },
  menuElement: {
    cursor: "pointer",
    alignSelf: "flex-end",
    padding: theme.spacing(1, 2),
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  menu: {
    margin: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
}));

const PageNav = [
  { to: "header", name: "Home" },
  { to: "about", name: "About Me" },
  { to: "contact", name: "Contact" },
];

const NavBar = (_, context) => {
  const classes = useStyles();
  const theme = useTheme();

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <div className={classes.menu}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={theme.palette.secondary.contrastText}
          />
          <div
            className={clsx(classes.menuHolder, {
              [classes.openMenu]: isOpen,
            })}
          >
            <div
              className={clsx(classes.menuItems, {
                [classes.showText]: isOpen,
              })}
            >
              {PageNav.map((navEl) => (
                <Link
                  activeClass={classes.activeMenu}
                  className={classes.menuElement}
                  to={navEl.to}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  onClick={(e) => setOpen(false)}
                >
                  <Typography variant="h4" noWrap>{context.t(navEl.name)}</Typography>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <SelectLanguage />
          <ChangeTheme />
        </div>
      </div>
    </>
  );
};

NavBar.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default NavBar;
