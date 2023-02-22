import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const DriverDetails = ({ driver, onDelete, onEdit }) => {
  const { name, dob, gender, licenseNumber, licenseType, photo } = driver;

  return (

    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
      Date of Birth: {dob}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Gender: {gender}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      License Number: {licenseNumber}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      License Type: {licenseType}
    </Typography>
    {photo && (
      <img src={URL.createObjectURL(photo)} alt="Driver" width="200" />
    )}
    <div style={{ marginTop: "1rem" ,}}>
      <Button
       variant="contained"
      style={{backgroundColor: "#50afa2"}}
        onClick={() => onEdit(driver)}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: "1rem" }}
        onClick={() => onDelete(driver)}
      >
        Delete
      </Button>
    </div>
  </CardContent>
</Card>
);
};

export default DriverDetails;