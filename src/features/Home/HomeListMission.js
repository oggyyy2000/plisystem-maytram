import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import axios from "axios";

import { useDispatch } from "react-redux";
import * as actions from "../../redux/types";

import "./css/HomeListMission.css";



function HomeListMission() {
  const [clicked, setClicked] = useState("");
  const [listMissionData, setListMissionData] = useState([]);
  const dispatch = useDispatch();

  const urlhomePageView = process.env.REACT_APP_API_URL + "homepageapiview/";

  // call API lay du lieu
  useEffect(() => {
    axios
      .get(urlhomePageView)
      .then((res) => {
        // console.log(res.data.data);
        setListMissionData(res.data.data);
        handleListMissionClick(res.data.data[0].schedule_id)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleListMissionClick(mission_id) {
    setClicked(mission_id);
    dispatch({ type: actions.MissionId, data: mission_id });
  }

  return (
    <>
      {/* <div
        item
        className={`homelist-container ${
          clicked === true ? "homelist-container-onclick" : ""
        }`}
        // onClick={checkClicked}
      >
        <div item className="homelist-items-title">
          <div className="homelist-icon-top-right">
            <FlightRoundedIcon fontSize="large" />
          </div>
          <div item className="homelist-date-tittle">
            28-4-2023
          </div>
        </div>
        <div item className="homelist-content">
          <div>
          <p>Last Update</p>
          18h50
          </div>
        <div item className="homelist-icon-bottom-right">
          <CheckCircleIcon color="success" fontSize="inherit" />
        </div>
        </div>
      </div> */}

      {listMissionData.map((listmission) => {
        return (
          <>
            <div
              item
              className={`homelist-container ${
                clicked === listmission.schedule_id
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