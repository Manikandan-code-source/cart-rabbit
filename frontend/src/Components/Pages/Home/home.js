import { Button, TextField } from "@mui/material";
import React from "react";
import "./home.css";

export default function home() {
  return (
    <div>
      <div className="home-container">
        <p className="home-text">welcome to salaza rooms</p>
        <p className="home-con">A Best place to stay...</p>
      </div>
      <div className="home-container-content">
        <div className="sign-log">
          <div className="cen-con">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
          </div>
          <div className="cen-con">
            <TextField
              id="standard-basic"
              label="Surname"
              variant="standard"
            />
          </div>
          <div className="cen-con">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
            />
          </div>
          <div className="cen-con">
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div className="cen-con">
            <Button style={{marginRight : 10,width : 120}} variant="contained">Sign in</Button>
            <Button style={{backgroundColor : "red",color : "white",width : 120}}>Log in</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
