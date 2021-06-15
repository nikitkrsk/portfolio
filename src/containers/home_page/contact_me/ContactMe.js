import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(5, 0),
  },
  link: {
    textDecoration: "none",
    padding: theme.spacing(0, 2),
    fontSize: "3rem",
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  badges: { 
    display: "flex", 
    justifyContent: "center",
    '& div': {
      fontSize: '1.5em',
      display: 'grid',
      justifyItems: 'center',
      padding: '20px'
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      '& div': {
        padding: '10px'
      },
    },
  },
  iconStyle:{
    fontSize: 50
  },
  divider:{
    margin: '0 20%'
  },
  disclaimer:{
    display: "flex",
    justifyContent: "center",
    textAlign: 'center',
    margin: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(10),
    },

  }
}));
const ContactMe = (_, context) => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <div className={classes.root} id="contact">
      <div className={classes.content}>
        <div>
          <PhoneIcon fontSize={"large"} />
          <a href="tel:+359899343716" className={classes.link}>
            +359 89 934 3716
          </a>
        </div>
        <div>
          <EmailIcon fontSize={"large"} />
          <a
            href="mailto:hi@atroshenkonikita.com?subject=Hello%20Nikita"
            className={classes.link}
          >
            hi@atroshenkonikita.com
          </a>
        </div>
        <div className={classes.badges}>
          <div>
            <p>CodeWars:</p>
            <a
              href="https://www.codewars.com/users/nikitkrsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.codewars.com/users/nikitkrsk/badges/micro"
                alt="codewars"
              />
            </a>
          </div>
          <div>
            <p>LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/nikita-atroshenko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={classes.iconStyle} />
            </a>
          </div>
          <div>
            <p>GitHub:</p>
            <a
              href="https://github.com/nikitkrsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={classes.iconStyle} />
            </a>
          </div>
          <div>
            <p>{context.t("CV")}:</p>
            <a
              href="https://drive.google.com/drive/folders/1r9aOxLd1ZqYaw-YQwgK6LDiUc9stZEie?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InsertDriveFileIcon className={classes.iconStyle} />
            </a>
          </div>
        </div>
       
      </div>
      <Divider className={classes.divider}/>
        <div className={classes.disclaimer}>
        <Typography variant="body2" >{year === 2020 ? year : `2020 - ${year}`} | Designed, Created and Maintained by Me.</Typography>
        
        </div>
    </div>
  );
};

ContactMe.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default ContactMe;
