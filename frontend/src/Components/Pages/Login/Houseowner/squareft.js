import React, { useState } from "react";
import { TextField } from "@mui/material";
import Axios from "axios";

import "./houseowner.css";

export default function Squareft(props) {
  const [bucketdata, useBucketdata] = useState(props.transferdata.roomsname);

  const Finaldata = {
    name: props.transferdata.name,
    address: props.transferdata.address,
    roomscount: props.transferdata.roomscount,
    roomdetails: bucketdata,
  };

  function Handlemaxservice(e, i) {
    const { name, value } = e.target;
    const list = [...bucketdata];
    list[i][name] = value;
    useBucketdata(list);
  }

  function Handleminservice(e, i) {
    const { name, value } = e.target;
    const list = [...bucketdata];
    list[i][name] = value;
    useBucketdata(list);
  }

  // useEffect(()=>{
  //   Axios.get("http://localhost:8000/getdata")
  //   .then(res=>{
  //     console.log(res.data);
  //   })
  // })

  function transferdata() {
    Axios.post("http://localhost:8000/postdata", {
      Name: Finaldata.name,
      Address: Finaldata.address,
      NumberOfRomms: Finaldata.roomscount,
      RoomsDetails: Finaldata.roomdetails,
    }).then((res) => console.log("data sended", res));
  }

  return (
    <div className="sqcontainer">
      <div>
        {bucketdata.map((e, i) => {
          return (
            <div>
              <div>
                <p>Enter the Min and Max date for the Rooms {i + 1}:</p>
                <TextField
                  className="textfeild"
                  name="mindays"
                  InputProps={{
                    inputProps: { min: 1 },
                  }}
                  type="number"
                  value={e.mindays}
                  size="small"
                  onChange={(ele) => Handleminservice(ele, i)}
                />

                <TextField
                  className="textfeild"
                  name="maxdays"
                  InputProps={{
                    inputProps: { min: 1 },
                  }}
                  type="number"
                  value={e.maxdays}
                  size="small"
                  onChange={(ele) => Handlemaxservice(ele, i)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={props.handleclick} className="backbtn">
          Back
        </button>
        <button onClick={transferdata} className="savebtn">
          Save
        </button>
      </div>
    </div>
  );
}
