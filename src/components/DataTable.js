import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 110 },
];

const rows = [
  { id: 1, name: "Mounika Paidi", age: 20 },
  { id: 2, name: "Prudhvi Raj", age: 24 },
   { id: 3, name: "Ganesh Paidi", age: 22 },
];

const DataTable = () => (
  <Box sx={{ height: 300, width: "100%" }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      disableSelectionOnClick
      sx={{
        border: "none",
        "& .MuiDataGrid-row:nth-of-type(even)": {
          backgroundColor: "#f9f9f9",
        },
      }}
    />
  </Box>
);

export default DataTable;
