import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import classes from "./cv.module.css";

const CV = () => {
  return (
    <div className={classes.gridContainer}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default CV;
