import React from "react";
import { useState } from "react";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "./css/FlightRouteDefectList.css";

function FlightRoutreDefectList() {
  const [close, setClose] = useState(false);

  function handleHidePanel() {
    setClose(true);
    if (close === true) {
      setClose(false);
    }
  }
  return (
    <>
      <div
        className={`flightroute-close-leftpanel ${
          close === true ? "onclose-btn" : ""
        }`}
      >
        <button onClick={handleHidePanel}>
          {close === true ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <KeyboardDoubleArrowLeftIcon />
          )}
        </button>
      </div>
      <div className={`flightroute-left-panel ${close ? "onclose-panel" : ""}`}>
        <div className="flightroute-itemcard">
          <div className="flightroute-itemcard-header">
            <h1>Defect</h1>
          </div>

          <div class="flightroute-itemcard-content">
            <p>CDTT vo bat: on VT8</p>
            <p>GIS: 18.16, 28.32</p>
          </div>
        </div>
        {/* ------------------------------------ */}
        <div className="flightroute-itemcard">
          <div className="flightroute-itemcard-header">
            <h1>Defect</h1>
          </div>

          <div class="flightroute-itemcard-content">
            <p>CDTT vo bat: on VT8</p>
            <p>GIS: 18.16, 28.32</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightRoutreDefectList;
