import React, { useState, useEffect } from "react";
import "./houseowner.css";
import { IconButton, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Selection from "./selection";

export default function Houseowner() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setRooms] = useState("");
  const [next, setNext] = useState(false);

  //validation state

  const [nameval, setNameval] = useState(false);
  const [addressval, setAddressval] = useState(false);
  const [roomsval, setRoomsval] = useState(false);
  const [bucket, setBucket] = useState([]);

  const formdata = {
    name: name,
    Address: address,
    RoomsCount: bucket,
  };

  useEffect(() => {}, [name, address, rooms, bucket]);

  function texthandlechange(e) {
    setNameval(false);
    setName(e.target.value);
  }

  function addresshandlechange(e) {
    setAddressval(false);
    setAddress(e.target.value);
  }

  function roomshandlechange(e) {
    // setBucket((prev) => [...prev, e.target.value]);
    setRoomsval(false);
    setBucket([...bucket, { rooms: "" ,squareft : "",mindays : "",maxdays : ""}]);
    setRooms(e.target.value);
  }

  console.log(bucket);


  function nexthandlechange() {
    if (rooms === "" && name === "" && address === "") {
      setRoomsval(true);
      setAddressval(true);
      setNameval(true);
    } else if (name !== "" && rooms === "" && address === "") {
      setAddressval(true);
      setRoomsval(true);
    } else if (name === "" && rooms !== "" && address === "") {
      setAddressval(true);
      setNameval(true);
    } else if (name === "" && rooms === "" && address !== "") {
      setRoomsval(true);
      setNameval(true);
    } else if (name === "" && rooms !== "" && address !== "") {
      setNameval(true);
    } else if (name !== "" && rooms === "" && address !== "") {
      setRoomsval(true);
    } else if (name !== "" && rooms !== "" && address === "") {
      setAddressval(true);
    } else if (name !== "" && rooms !== "" && address !== "") {
      setNext(true);
    }
  }

  return (
    <div className="border-box" style={{ color: "white" }}>
      {!next ? (
        <>
          <p className="heading">Houseowner Details</p>
          <div className="center-content">
            <div className="content">
              <p style={{ marginBottom: 10 }}>
                Name : <span style={{ color: "aqua" }}>*</span>
              </p>
              <TextField
                className="textfeild"
                value={name}
                size="small"
                onChange={texthandlechange}
              />
              {nameval && <p className="required">Name must be required</p>}
            </div>
            <div className="content">
              <p style={{ marginBottom: 10 }}>
                Address : <span style={{ color: "aqua" }}>*</span>
              </p>
              <TextField
                className="textfeild"
                value={address}
                size="small"
                onChange={addresshandlechange}
              />
              {addressval && (
                <p className="required">Address must be required</p>
              )}
            </div>
            <div className="content">
              <p style={{ marginBottom: 10 }}>
                Number of Rooms : <span style={{ color: "aqua" }}>*</span>
              </p>
              <TextField
                className="textfeild"
                InputProps={{
                  inputProps: { min: 1 },
                  endAdornment: (
                    <IconButton onClick={() => setRooms("")}>
                      <ClearIcon />
                    </IconButton>
                  ),
                }}
                type="number"
                value={rooms}
                size="small"
                onChange={roomshandlechange}
              />
              {roomsval && <p className="required">Rooms feild is required</p>}
            </div>
          </div>
          <button onClick={nexthandlechange} className="nextbtn">
            Next
          </button>
        </>
      ) : (
        <>
          <Selection handleclick={() => setNext(!next)} formdata={formdata} />
        </>
      )}
    </div>
  );
}
