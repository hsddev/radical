import React from "react";
import "./Scenarios.css";
import Scenario from "./Scenario";
import Benefits from "./Benefits";
import CustomScenario from "./CustomScenario";

function Scenarios(props) {
  return (
    <div className="scenarios">
      <div className="scenarios__head">
        <h2>Select a Scenario</h2>
      </div>
      <div className="scenarios__body">
        <div className="scenarios__selectedScenarios">
          <div className="selectedScenario">
            <Scenario
              src="/assets/icons/efficiency.svg"
              text="Aim for efficienty and productivity"
            />

            <Scenario
              src="/assets/icons/innovetion.svg"
              text="Aim for innovation and collaboration"
            />

            <Scenario
              src="/assets/icons/brand.svg"
              text="Aim for talent and brand"
            />

            <Scenario src="/assets/icons/custom.svg" text="Custom Scenario" />
          </div>

          <div className="scenarios__benefits">
            <Benefits
              spaceRequired={props.surface}
              cost="200"
              potential={props.surface2}
            />
          </div>
        </div>
        <div className="scenarios__customScenarios">
          <CustomScenario
            title="In our future workplace work will be conducted:"
            sliderMin="Anywhere at anytime"
            sliderMax="Mainly from the office"
          />

          <CustomScenario
            title="Our future workplace will:"
            sliderMin="Provide a differentiating experience"
            sliderMax="Provide the necessities"
          />

          <CustomScenario
            title="When we think about individual seats in office:"
            sliderMin="Depends on activity or need"
            sliderMax="Depends on title and position"
          />
        </div>
      </div>
    </div>
  );
}

export default Scenarios;
