import React from "react";

import "../../css/Challenge/ProgressBar.css"
const ProgressBar = (props) => {
  let completed = 10;

  const determineWidth = {
    width: `${completed}%`,
  }
  return (
    <div id = "ProgressBar">
      <div id = "fillerItem" style = {determineWidth}>Progressbar</div>
    </div>
  );
};

export default ProgressBar;
