import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";

import axios from "axios";

import "./css/HomeListMission.css";

function HomeListMission() {
  const [clicked, setClicked] = useState("");
  const [listMissionData, setListMissionData] = useState([]);
  const urlhomePageView = process.env.REACT_APP_API_URL + "homepageapiview/";

  // call API lay du lieu
  useEffect(() => {
    axios
      .get(urlhomePageView)
      .then((res) => {
        // console.log(res.data.data);
        setListMissionData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleListMissionClick(mission_id) {
    setClicked(mission_id);
    if (clicked === mission_id) {
      setClicked("");
    }
  }

  // console.log(typeof(clicked));
  return (
    <>
      {/* <Grid
        item
        className={`homelist-container ${
          clicked === true ? "homelist-container-onclick" : ""
        }`}
        // onClick={checkClicked}
      >
        <Grid item className="homelist-items-title">
          <Grid className="homelist-icon-top-right">
            <FlightRoundedIcon fontSize="large" />
          </Grid>
          <Grid item className="homelist-date-tittle">
            28-4-2023
          </Grid>
        </Grid>
        <Grid item className="homelist-content">
          <div>
          <p>Last Update</p>
          18h50
          </div>
        <Grid item className="homelist-icon-bottom-right">
          <CheckCircleIcon color="success" fontSize="inherit" />
        </Grid>
        </Grid>
      </Grid> */}
      {listMissionData.map((listmission) => {
        return (
          <>
            <div
              item
              className={`homelist-container ${
                clicked == listmission.schedule_id
                  ? "homelist-container-onclick"
                  : ""
              }`}
              onClick={() => handleListMissionClick(listmission.schedule_id)}
            >
              <div item className="homelist-items-title">
                <div className="homelist-icon-top-right">
                  <FlightRoundedIcon fontSize="large" />
                </div>
                <div item className="homelist-date-tittle">
                  {listmission.implementation_date}
                </div>
              </div>
              <div item className="homelist-content">
                <div>
                  <p>Last Update</p>
                  {listmission.lastest_time_update_data}
                </div>
                <div item className="homelist-icon-bottom-right">
                  <CheckCircleIcon color="success" fontSize="inherit" />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default HomeListMission;
