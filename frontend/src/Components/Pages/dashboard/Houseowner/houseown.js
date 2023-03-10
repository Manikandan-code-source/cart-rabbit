import React, { useEffect, useState } from "react";
import "./houseown.css";
import Axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Editdetails from "./editdetails";
import Roomdetails from "./roomdetails";

export default function Houseown() {
  const [rows, setRows] = useState([]);
  const [room, setRoom] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [editData, setEditData] = useState();
  const [roomdetail, setRoomdetail] = useState();

  useEffect(() => {
    Axios.get("http://localhost:8000/getdata").then((res) => {
      setRows(res.data);
    });
  }, [rows]);

  useEffect(() => {
    rows.forEach((e) => {
      setRoom(e.RoomsDetails);
    });
  }, [room, rows]);



  function handledelete(event, cellvalue) {
    const idData = cellvalue.id;
    Axios.delete(`http://localhost:8000/deletedata/${idData}`);
  }

  function handleEdit(e, cellvalue) {
    setFlag(true);
    setEditData(cellvalue);
  }

  function handleRoomDetails(e, cellvalue) {
    setFlag2(true)
    setRoomdetail(cellvalue)
  }



  const columns = [
    { field: "Name", headerName: "Name", width: 90 },
    {
      field: "Address",
      headerName: "Address",
      width: 150,
      editable: true,
    },
    {
      field: "NumberOfRomms",
      headerName: "Number of Rooms",
      width: 150,
      editable: true,
    },
    {
      field: "Delete",
      renderCell: (cellvalue) => {
        return (
          <Button
            style={{ height: 20, width: 20 }}
            variant="contained"
            color="primary"
            onClick={(event) => handledelete(event, cellvalue)}
          >
            Delete
          </Button>
        );
      },
    },
    {
      field: "Edit",
      renderCell: (cellvalue) => {
        return (
          <Button
            style={{ height: 20, width: 20 }}
            variant="contained"
            color="primary"
            onClick={(event) => handleEdit(event, cellvalue)}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "Room Details",
      renderCell: (cellvalue) => {
        return (
          <Button
            style={{ height: 20 }}
            variant="contained"
            color="primary"
            onClick={(event) => handleRoomDetails(event, cellvalue)}
          >
            More info
          </Button>
        );
      },
    },
  ];

  //   [
  //     {
  //         "rooms": "scsc",
  //         "squareft": "3434",
  //         "mindays": "3",
  //         "maxdays": "4",
  //         "_id": "64099610156a2c9a9a0eeedf"
  //     }
  // ]

  // const columnsroom = [
  //   { field: "rooms", headerName: "Room Name", width: 90 },
  //   {
  //     field: "squareft",
  //     headerName: "Squareft",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "mindays",
  //     headerName: "Min-Day",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "maxdays",
  //     headerName: "Max-Day",
  //     width: 150,
  //     editable: true,
  //   },
  // ];

  return (
    <div className="bg-control">
      <div className="table-bg">
        <div className="para-style">
          <p className="para-heading">House Availability Report</p>
        </div>
        <div className="textheading">
          <p>Resident Details :</p>
        </div>

        {flag === false && (
          <>
            <Box sx={{ height: 280, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
          </>
        )}
        {flag === true && <><Editdetails data={editData}/></>}
        {flag2 === true && <><Roomdetails data={roomdetail}/></>}
      </div>
    </div>
  );
}
