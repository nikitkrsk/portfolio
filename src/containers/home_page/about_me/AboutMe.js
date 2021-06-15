import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import Profile from "../../../assets/img/profilePicture.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Slider from "../../../helpers/slider";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  slider: {
    margin: theme.spacing(5, 0),
    transform: "rotate(3deg)",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  content: {
    display: "grid",
    margin: theme.spacing(10),
    justifyItems: "center",
    gridTemplateColumns: "repeat(2, 50%)",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "100%",
    },
  },
  mobileText: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  profileImage: {
    width: "450px",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
}));
const Header = (_, context) => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.slider}>
        <Slider direction={"toLeft"} text={context.t("About Me")} />
      </div>
      <div className={classes.slider}>
        <Slider direction={"toRight"} text={context.t("About Me")} />
      </div>
      <Typography variant="h2" className={classes.mobileText}>
        {" "}
        {context.t("About Me")}{" "}
      </Typography>
      <div className={classes.content}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2}>
          <Typography variant="h4">
            {context.t("about_me_1")}
            <br />
            <br />
            {context.t("about_me_2")}
            <br />
            Rust, Golang & Java.
            <br />
            <br />
            {context.t("about_me_3")}
            <br />
            React, Angular, Vue & Svelte.
            <br />
            <br />
            {context.t("about_me_4")}
            : Docker, k8s, AWS & GCP
            <br />
            <br />
            {context.t("about_me_5")}
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          duration={1}
        >
          <img
            className={classes.profileImage}
            alt="profilePicture"
            src={Profile}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;
