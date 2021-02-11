import React, { useState } from "react";
import "./Inputs.css";

function Inputs(props) {
  const options = ["NA", "LATAM", "EMEA", "ASIA PAC"];

  const [clicked, setClickled] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    return value;
  };

  const handleSelect = () => {
    setClickled(!clicked);
  };

  return (
    <div className="inputs">
      <div className="inputs__input">
        <div className="inputs__inputSpan">
          <input
            type="text"
            name="currentOfficeArea"
            onChange={props.handleInput}
          />
          <span>sqm</span>
        </div>
        <label htmlFor="currentOfficeArea"> Current Office Area</label>
      </div>

      <div className="inputs__input">
        <input type="text" name="currentHeadCount" />
        <label htmlFor="currentHeadCount"> Current Headcount</label>
      </div>

      <div className="inputs__input">
        <input type="text" name="anticipatedHeadCount" />
        <label htmlFor="anticipatedHeadCount"> Anticipated Headcount</label>
      </div>

      <div className="inputs__input">
        <input
          type="text"
          name="Region"
          value=""
          style={{
            background: "url('/assets/icons/select arrow.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
          onClick={handleSelect}
        />

        {clicked &&
          options.map((option) => (
            <li
              style={{
                listStyle: "none",
                display: "block",
                textDecoration: "none",
                borderBottom: "3px solid #2afbca",
                height: "36px",
              }}
            >
              {option}
            </li>
          ))}

        <label htmlFor="anticipatedHeadCount">Region</label>
      </div>
    </div>
  );
}

export default Inputs;
