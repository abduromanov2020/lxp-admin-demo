import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";

function GradingBar({ score }) {
  return (
    <div
      style={{
        height: "70px",
        width: "70px",
      }}
    >
      <CircularProgressbar value={score} text={`  Nilai ${score} `} />
    </div>
  );
}

GradingBar.propTypes = {
  score: PropTypes.number.isRequired,
};

export default GradingBar;
