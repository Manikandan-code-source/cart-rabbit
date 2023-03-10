import React from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function Roomdetails(props) {
  const rows =props.data.row.RoomsDetails


  const column = [
    { field: "rooms", headerName: "Room Name", width: 90 },
    {
      field: "squareft",
      headerName: "Squareft",
      width: 150,
      editable: true,
    },
    {
      field: "mindays",
      headerName: "Min-Day",
      width: 150,
      editable: true,
    },
    {
      field: "maxdays",
      headerName: "Max-Day",
      width: 150,
      editable: true,
    },
  ];
  return (
    <div>
      <p style={{fontSize : 40,marginBottom : 20}}>Room Details</p>
         <Box sx={{ height: 280, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={column}
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
    </div>
  )
}
