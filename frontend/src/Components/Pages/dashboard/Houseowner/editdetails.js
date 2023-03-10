import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";


export default function Editdetails(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");


  function texthandlechange(e) {
    setName(e.target.value);
  }

  function Addresshandlechange(e) {
    setAddress(e.target.value);
  }

  function sendata(){
    console.log(props.data.id);
    Axios.put(`http://localhost:8000/updatedata/${props.data.id}`,{
        Name : name,
        Address : address
    });

  }

  return (
    <div style={{ marginTop: 20, display: "flex", flexDirection: "column" }}>
      <p> Name :</p>
      <TextField
        value={name}
        variant="standard"
        fullWidth
        size="small"
        onChange={texthandlechange}
        placeholder={props.data.row.Name}
      />
      <p> Address :</p>
      <TextField
        value={address}
        variant="standard"
        fullWidth
        size="small"
        onChange={Addresshandlechange}
        placeholder={props.data.row.Address}
      />
      <Button onClick={sendata} style={{ marginTop: 10 }} variant="contained">
        Edit
      </Button>
    </div>
  );
}
