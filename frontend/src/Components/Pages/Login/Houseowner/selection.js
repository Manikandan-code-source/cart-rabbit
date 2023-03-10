import React, { useState } from "react";
import "./houseowner.css";
import { TextField } from "@mui/material";
import Squareft from "./squareft";

export default function Selection(props) {
  const [next, setNext] = useState(false);
  const [holder, setHolder] = useState(props.formdata.RoomsCount);
  const transferdata = {
    name: props.formdata.name,
    address: props.formdata.Address,
    roomscount: props.formdata.RoomsCount.length,
    roomsname: holder,
  };

  function handlenext() {
    setNext(true);
  }

  function handleservice(e, i) {
    const { name, value } = e.target;
    const list = [...holder];
    list[i][name] = value;
    setHolder(list);
  }

  function handlesquareservice(e, i){
    const { name, value } = e.target;
    const list = [...holder];
    list[i][name] = value;
    setHolder(list);
  }

  return (
    <>
      {!next ? (
        <>
          <div className="conditionalbtn">
            <div>
              <div className="rooms-heading">
                <p>Enter Room name :</p>
              </div>
              {holder.map((e, i) => {
                return (
                  <div className="align-remove">
                    <div>
                      <p>Name of the room {i+1}:</p>
                      <TextField
                        name="rooms"
                        type="text"
                        className="textfeild"
                        value={e.rooms}
                        onChange={(ele) => handleservice(ele, i)}
                        size="small"
                      />
                    </div>
                  </div>
                );
              })}

              <div>
                <p>Enter the squareft number : </p>
              </div>
              {holder.map((e, i) => {
                return (
                  <div className="align-remove">
                    <div>
                      <p>room {i+1}s Squareft :</p>
                      <TextField
                        name="squareft"
                        type="text"
                        className="textfeild"
                        value={e.squareft}
                        onChange={(ele) => handlesquareservice(ele, i)}
                        size="small"
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
            <button onClick={handlenext} className="savebtn">
              Next
            </button>
            </div>
           
          </div>
        </>
      ) : (
        <>
          <Squareft
            handleclick={() => setNext(!next)}
            transferdata={transferdata}
          />
        </>
      )}
    </>
  );
}
