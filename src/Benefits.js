import React from "react";
import "./Benefits.css";
import PublishIcon from "@material-ui/icons/Publish";

function Benefits(props) {
  return (
    <div className="benefits">
      <div className="benefits__results">
        <div className="spaceRequired">
          <p>Space required:</p>
          <p>{props.spaceRequired}sqm</p>
        </div>
        <div className="cost">
          <p>Fit-out cost:</p>
          <p>£{props.cost}</p>
        </div>
        <div className="potential">
          <p>Potential space saving:</p>
          <p>{props.potential}</p>
        </div>
      </div>
      <div className="benefits__keyBenefits">
        <ul>
          <li>Key benefit statements shown here</li>
          <li>Key benefit statements shown here</li>
          <li>Key benefit statements shown here</li>
          <li>Key benefit statements shown here</li>
        </ul>
      </div>
      <div className="benefits__upload">
        <PublishIcon />
        <button>.PDF</button>
        <button>.PNG</button>
      </div>
    </div>
  );
}

export default Benefits;
