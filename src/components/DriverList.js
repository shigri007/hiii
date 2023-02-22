import React from "react";
import { Grid } from "@material-ui/core";
import DriverDetails from "./DriverDetails";


const DriverList = ({ drivers, onDelete, onEdit }) => {
  return (
    <Grid container spacing={2} >
      {drivers.map((driver) => (
        <Grid item key={driver.licenseNumber} xs={12} sm={6} md={4}>
          <DriverDetails driver={driver} onDelete={onDelete} onEdit={onEdit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DriverList;