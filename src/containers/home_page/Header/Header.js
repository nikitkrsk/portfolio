import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";
import Creepyface from "react-creepyface";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Main10 from "../../../assets/img/1.png";
// Hover alternative picture
// eslint-disable-next-line no-unused-vars
import Main2 from "../../../assets/img/9.png";
import Main3 from "../../../assets/img/8.png";
import Main4 from "../../../assets/img/2.png";
import Main5 from "../../../assets/img/3.png";
import Main6 from "../../../assets/img/4.png";
import Main7 from "../../../assets/img/5.png";
import Main8 from "../../../assets/img/6.png";
import Main9 from "../../../assets/img/7.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(2,50%)",
    "& img": {
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
      height: "100%",
    },
  },
  text: {
    alignSelf: "center",
    height: "250px",
    margin: theme.spacing(2, 13),
    [theme.breakpoints.down("sm")]: {
      height: "250px",
      margin: theme.spacing(12, 5),
    },
  },
  textBreak: {
    margin: theme.spacing(2, 0),
    color: theme.palette.secondary.main,
  },
  face: {
    alignSelf: "end",
    justifySelf: "center",
  },
  //arrow
  arrow: {
    position: "absolute",
    bottom: "4%",
    left: " 25%",
    transform: "translate(-50%,-50%)",
    "& span": {
      display: "block",
      width: "30px",
      height: "30px",
      borderBottom: `5px solid ${theme.palette.secondary.main}`,
      borderRight: `5px solid ${theme.palette.secondary.main}`,
      transform: "rotate(45deg)",
      margin: "-10px",
      animation: "$animate 2s infinite",
      "&:nth-child(2)": {
        animationDelay: "-0.2s",
      },
      "&:nth-child(3)": {
        animationDelay: "-0.4s",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "@keyframes animate": {
    "0%": {
      opacity: 0,
      transform: "rotate(45deg) translate(-20px,-20px)",
    },
    " 50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: "rotate(45deg) translate(20px,20px)",
    },
  },
}));
const Header = (_, context) => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <div className={classes.text}>
        <Typist cursor={{ show: false }}>
          <Typography variant="h1" noWrap>
            Hello
          </Typography>
          <Typography variant="h3">My name is Nikita Atroshenko</Typography>
          <Typography variant="h5" color="secondary">
            I'm Front-End
            <Typist.Backspace count={9} delay={1000} />
            Back-End
            <Typist.Backspace count={8} delay={1000} />
            Full-Stack Developer.
          </Typography>
        </Typist>

        <div class={classes.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={classes.face}>
        <Creepyface
          src={Main10}
          options={{
            hover: Main10,
            looks: [
              { angle: 0, src: Main2 },
              { angle: 45, src: Main3 },
              { angle: 90, src: Main4 },
              { angle: 135, src: Main5 },
              { angle: 180, src: Main6 },
              { angle: 225, src: Main7 },
              { angle: 270, src: Main8 },
              { angle: 315, src: Main9 },
            ],
          }}
        />
      </div>
    </div>
  );
};

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;
