import React from "react";
import "./contact.css";

import contactus from "./contact-us-image.jpg";
import care from "./care.png";
import house from "./house.png";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

export default function contact() {
  return (
    <div>
      <div className="fullcontent">
        <p className="contact-heading">
        <span className="con-span">W</span>anna Contact <span className="con-span">U</span>s<span className="con-span">?</span>
        </p>
        <img alt="img not found" className="img-src" src={contactus} />
      </div>
      <div className="content-src">
        <div className="sec-1">
          <div className="avatar">
            <img alt="img not found" src={care} />
          </div>
          <h1 style={{ fontWeight: "bolder" }}>Customer Care 24/7</h1>
          <div className="paratext">
            <p>
              We have a 24/7 customer care service who work seemlessly to help
              our customers
            </p>
            <div>
              <Button
                sx={{
                  width: 250,
                  height: 30,
                  backgroundColor: "#0000FF",
                  fontSize: 10,
                  color: "white",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#0000FF",
                  },
                }}
                startIcon={
                  <CallIcon
                    sx={{
                      color: "white",
                    }}
                  />
                }
              >
                Contact Customer Support
              </Button>
            </div>
          </div>
        </div>
        <div className="sec-2">
          <div className="avatar-2">
            <img alt="img not found" src={house} />
          </div>
          <h1 style={{ fontWeight: "bolder" }}>Management Services</h1>
          <div className="paratext">
            <p>
             Our service were all over India and been establishing more around every states.
            </p>

            <div>
              <Button
                sx={{
                  width: 250,
                  height: 30,
                  backgroundColor: "red",
                  fontSize: 10,
                  color: "white",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "red",
                  },
                }}
                startIcon={
                  <MapsHomeWorkIcon
                    sx={{
                      color: "white",
                    }}
                  />
                }
              >
                Contact Management Person{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
