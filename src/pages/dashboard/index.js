import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { Button, Grid, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GetAppIcon from "@mui/icons-material/GetApp";
import axios from 'axios';
import { useHistory } from "react-router-dom";

interface RowData {
  id: number;
  اسم_العميل: string;
  العنوان: string;
  رقم_الجوال: string;
  geolocation: string;
  ip_address: string;
  date_time: string;
}




const formatDate = (dateString: string): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};

const Dashboard: React.FC = () => {

    const history = useHistory();

  // Sample data
  const data: RowData[] = [
    { id: 1, اسم_العميل: "John Doe", العنوان: "123 Main St", رقم_الجوال: "555-1234", geolocation: "42.3601, -71.0589", ip_address: "192.168.1.1", date_time: "2023-01-01T12:00:00" },
    { id: 2, اسم_العميل: "Jane Doe", العنوان: "456 Oak St", رقم_الجوال: "555-5678", geolocation: "40.7128, -74.0060", ip_address: "192.168.1.2", date_time: "2023-01-02T14:30:00" },
    // ... add more sample data entries
    { id: 10, اسم_العميل: "Mike Smith", العنوان: "789 Pine St", رقم_الجوال: "555-9876", geolocation: "34.0522, -118.2437", ip_address: "192.168.1.10", date_time: "2023-01-10T18:45:00" },
  ];

  // Columns
  const columns = useMemo(() => [
    { accessorKey: "id", header: "الرقم التسلسلي", size: 100 },
    { accessorKey: "اسم_العميل", header: "اسم العميل", size: 150 },
    { accessorKey: "العنوان", header: "العنوان", size: 200 },
    { accessorKey: "رقم_الجوال", header: "رقم الجوال", size: 150 },
    { accessorKey: "geolocation", header: "الموقع الجغرافي", size: 200 },
    { accessorKey: "ip_address", header: "عنوان IP", size: 150 },
    { accessorKey: "date_time", header: "التاريخ والوقت", size: 200, render: (rowData) => formatDate(rowData.date_time) },
  ], []);

  const handleExport = () => {
    // Add logic to export data as Excel
    console.log("Exporting data as Excel");
  };

  const handleLogout = () => {
    // Add logic for logout
    console.log("Logging out");
    history.push("/");


   
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            لوحة المتابعه
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <MaterialReactTable
            title=""
            columns={columns}
            data={data}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" startIcon={<GetAppIcon />} onClick={handleExport}>
            تصدير كملف Excel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
