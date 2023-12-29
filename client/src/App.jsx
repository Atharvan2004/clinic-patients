import React from 'react';
import { Typography, Card, AppBar, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import PersistentDrawerLeft from "./Drawer.jsx";
import NewPatientForm from "./NewPatientForm.jsx";
import SearchResult from './SearchResult.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const personList = [
    {
      name: "John Doe",
      age: 25,
      occupation: "Engineer",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      name: "Jane Smith",
      age: 30,
      occupation: "Teacher",
      phone: "987-654-3210",
      address: "456 Oak St",
    },
    {
      name: "Bob Johnson",
      age: 35,
      occupation: "Doctor",
      phone: "555-123-4567",
      address: "789 Pine St",
    },
    // Add more objects as needed
  ];

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <PersistentDrawerLeft />
      <Routes>
        <Route path="/" exact element={<NewPatientForm />} />
        <Route path="/new" element={<SearchResult personList={personList}/>} />
      </Routes>
    </Router>
  );
}
