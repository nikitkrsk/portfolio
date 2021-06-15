import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    zIndex: 2000,
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const LoadingComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
          {/* LOADING ... */}
        <CircularProgress size={100}/>
      </div>
    </>
  );
};
export default LoadingComponent;
