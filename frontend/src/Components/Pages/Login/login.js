import React from "react";
import { useState } from "react";
import "./login.css";
import HouseIcon from "@mui/icons-material/House";
import HouseOwner from "./Houseowner/houseowner";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Login() {
  const [house, setHouse] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [backbtn, setBackbtn] = useState(true);

  function togglehouse() {
    setHouse(true);
    setBackbtn(false);
  }

  function togglebackbtn() {
    setHouse(false);
    setCustomer(false);
    setBackbtn(true);
  }

  return (
    <div className="container">
      <div className="cords">
        {!backbtn && (
          <div className="backbutton" onClick={togglebackbtn}>
            <KeyboardBackspaceIcon style={{ color: "white", fontSize: 30 }} />
          </div>
        )}

        {!house && !customer && (
          <>
            <div className="Houseowner" onClick={togglehouse}>
              <HouseIcon style={{ fontSize: 200 }} />
              <h1>House Owner</h1>
              <p>
                house owners who allow paying guests to stay in their home for a
                short period
              </p>
            </div>
          </>
        )}
        {house && (
          <>
            <HouseOwner />
          </>
        )}
      </div>
    </div>
  );
}
