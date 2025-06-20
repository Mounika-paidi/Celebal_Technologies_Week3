import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import ChartComponent from "./ChartComponent";
import DataTable from "./DataTable";
import CalendarComponent from "./CalendarComponent";
import KanbanBoard from "./KanbanBoard";

const Dashboard = () => {
  return (
    <Box p={3} sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Performance Chart</Typography>
            <ChartComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Team Calendar</Typography>
            <CalendarComponent />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Employee Data</Typography>
            <DataTable />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Kanban Board</Typography>
            <KanbanBoard />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
