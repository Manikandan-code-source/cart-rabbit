import React, { useState } from "react";
import "./dashboard.css";
import Houseown from "./Houseowner/houseown";

export default function Dashboard() {
  const [house, setHouse] = useState(false);

  function handlehouse() {
    setHouse(true);
  }


  return (
    <div>
      {house === false  ? (
        <>
          <div className="dash-bg">
            <div className="para-con">
              <p className="dash-heading">Statistical Report</p>
            </div>
            <div className="dash-content">
              <p>
                The statistical report that shows the table which all the owners
                rooms details has been given inside the table so that customer
                can view and explore vireity number of house owners.And House
                owners get benefit from that.
              </p>
              <div class="dash-btn">
                <button onClick={handlehouse} className="btn-house-cus">
                  Dashboard
                </button>
               
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {house === true && <div><Houseown/></div>}

        </>
      )}
    </div>
  );
}
