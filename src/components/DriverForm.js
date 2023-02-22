import React, { useState } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,

} from "@material-ui/core";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    marginTop:"10vh",
    padding: "0.3rem",
    border: "2px solid #ddd",
    borderRadius: "2px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
   
  },
  input: {
    width: "100%",
  },
  fileInput: {
    marginTop: "1rem",
    
  },
  submitButton: {
    marginTop: "1rem",
    backgroundColor: '#50afa2',
  },
};

const DriverForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [photo, setPhoto] = useState(null);
  const [phone, setPhone] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, dob, gender, photo,phone,licenseNumber, licenseType });
  };

  return (
    <Box bgcolor="#2196f3" p={3}>
      <form style={styles.form} onSubmit={handleSubmit} title="Details">
       
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <TextField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={styles.input}
          InputLabelProps={{
            shrink: true,
            endAdornment: (
              <InputAdornment position="end">
                &nbsp;
              </InputAdornment>
            ),
          }}
        />

        <FormControl style={styles.input}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Phone Number"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        <TextField
          label="License Number"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          style={styles.input}
        />
        <FormControl style={styles.input}>
          <FormLabel>License Type</FormLabel>
          <Select
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
            style={styles.input}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="HTV">HTV</MenuItem>
            <MenuItem value="LTV">LTV</MenuItem>
          </Select>
        </FormControl>
         <FormLabel>Upload Image</FormLabel>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          style={styles.fileInput}
        />
      </form>
      <form style={styles.form} onSubmit={handleSubmit} title="Details">
       
       <Button
          variant="contained"
          
          type="submit"
          style={styles.submitButton}
          
        >
          Submit
        </Button>
        </form>
    </Box>
  );
};

export default DriverForm;
