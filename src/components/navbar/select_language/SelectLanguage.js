import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "redux-i18n";

import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { ListOfLanguages } from "./ListOfLanguages";
import { countryToFlag } from "../../../helpers/countries";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },
  currentLanguage: {
    textDecoration: "underline dotted",
  },
  language: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: theme.spacing(1, 2),
    cursor: "pointer",
    "& :hover": {
      color: theme.palette.secondary.main,
    },
  },
  flag: {
    fontSize: "25px",
    padding: theme.spacing(0, 1),
  },
}));

const SelectLanguage = (_, context) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const state = useSelector((state) => ({
    lang: state.i18nState.lang,
  }));
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (language, event) => {
    event.preventDefault();
    dispatch(setLanguage(language));
    handleClose()
    
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <div className={classes.root}>
        <Button color="secondary" onClick={handleClick}>
          <div className={classes.currentLanguage}>{state.lang}</div>
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {ListOfLanguages.map((language) => (
            <div
              className={classes.language}
              onClick={(e) => handleLanguageChange(language.value, e)}
              key={language.value}
            >
              <div className={classes.flag}>{countryToFlag(language.code)}</div>
              <Typography variant="body2" noWrap>
                {language.language}
              </Typography>
            </div>
          ))}
        </Popover>
      </div>
    </>
  );
};

SelectLanguage.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SelectLanguage;
