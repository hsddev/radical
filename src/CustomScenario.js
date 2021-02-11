import React from "react";
import "./CustomScenario.css";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  horizontal: {
    width: 300,
    margin: "0 auto",
  },
});

const CustomSlider = withStyles({
  root: {
    color: "linear-gradient(to right, #7d7ccf, #2afbca)",
    backgroundImage: "",
    height: 8,
    "&$vertical": {
      width: 8,
    },
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#7d7ccf",
    border: "3px solid #fff",
    marginTop: -8,
    marginLeft: -12,
  },

  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  vertical: {
    "& $rail": {
      width: 8,
    },
    "& $track": {
      width: 8,
    },
  },
})(Slider);

function CustomScenario(props) {
  const classes = useStyles();

  return (
    <div className="custom">
      <h3>{props.title}</h3>
      <div className={classes.horizontal}>
        <CustomSlider defaultValue={50} valueLabelDisplay="auto" />
      </div>
      <div className="sliderInfo">
        <p>{props.sliderMin}</p>
        <p>{props.sliderMax}</p>
      </div>
    </div>
  );
}

export default CustomScenario;
