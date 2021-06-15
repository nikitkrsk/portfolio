import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import logo from "../../assets/logo.png";
import LogoDark from "../../assets/logo_black.png";

const useStyles = makeStyles((theme) => ({
  fullPage: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: " 1fr",
    },
  },
  leftSide: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, rgba(0,0,19,1) 100%)`,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageCentered: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
    },
  },
  rightSide: {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    gridGap: "20px",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
      height: "100vh",
    },
  },
  submit: {
    width: "220px",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.fullPage}>
        <div className={classes.leftSide}>
          <div className={classes.imageCentered}>
            <img src={theme.palette.type === "dark" ? logo : LogoDark} alt="logo" width="500px" />
          </div>
        </div>
        <div className={classes.rightSide}>
          <Typography variant="h3">
            404
          </Typography>
          <Typography variant="h5">
            Page Not Found
          </Typography>
          <Link href="/" variant="body2" color="secondary">
            Go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
