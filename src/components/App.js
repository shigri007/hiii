import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import DriverList from "./DriverList";
import DriverForm from "./DriverForm";
import Header from "./Header";

const App = () => {

const [drivers, setDrivers] = useState([]);
const [editDriver, setEditDriver] = useState(null);
const [showDriverForm, setShowDriverForm] = useState(false); // add state to control the display of the DriverForm

const handleSubmit = (driver) => {
if (editDriver) {
const updatedDrivers = drivers.map((d) =>
d.licenseNumber === editDriver.licenseNumber ? driver : d
);
setDrivers(updatedDrivers);
setEditDriver(null);
} else {
setDrivers([...drivers, driver]);
}
setShowDriverForm(false); // hide the DriverForm after submit
};

const handleDelete = (driver) => {
const updatedDrivers = drivers.filter(
(d) => d.licenseNumber !== driver.licenseNumber
);
setDrivers(updatedDrivers);
};

// toggle the display of DriverForm when the button is clicked
const handleAddDriver = () => {
setShowDriverForm(true);
}

return (
<Container>
<Header />
{showDriverForm && (
<DriverForm onSubmit={handleSubmit} editDriver={editDriver} />
)}
{!showDriverForm && (
<Button onClick={handleAddDriver} variant="contained" color="primary">
Add Driver
</Button>
)}
<DriverList drivers={drivers} onDelete={handleDelete}  />
</Container>
);
};

export default App;