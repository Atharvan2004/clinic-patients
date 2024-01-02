import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Grid, Container } from '@mui/material';
import axios from 'axios';

const NewPatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    age: "",
    occupation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/patient/newPatient',{formData});
    // Handle form submission logic here
    console.log('Form submitted:', response);
  };

  return (
    <><Typography variant="h4" align='center' marginTop={"20px"} color={'primary'} fontWeight={"bold"}>Welcome</Typography><Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          New Patient Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                fullWidth
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                type='number'
                fullWidth
                variant="outlined"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Occupation"
                fullWidth
                variant="outlined"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container></>
  );
};

export default NewPatientForm;
