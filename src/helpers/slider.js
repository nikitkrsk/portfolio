import React from "react";
import Ticker from "react-ticker";

import Typography from "@material-ui/core/Typography";

const Slider = ({ direction, text }) => {
  return (
    <Ticker
      direction={direction}
      offset={direction === "toRight" ? 10000 : 0}
      speed={10}
    >
      {() => (
        <>
          <Typography variant="h1" noWrap>
            &nbsp;{text}
          </Typography>
        </>
      )}
    </Ticker>
  );
};

export default Slider;
