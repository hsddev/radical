import React from "react";
import Heading from "./Heading";
import Scenarios from "./Scenarios";
import Inputs from "./Inputs";

function Indector() {
  return (
    <div>
      <Heading />
      <Inputs />
      <Scenarios surface="500" surface2="200" />
    </div>
  );
}

export default Indector;
