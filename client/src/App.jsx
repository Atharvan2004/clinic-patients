import React from 'react';
import CustomizedAccordions from './NewReportForm.jsx';
import { searchResultList } from './Drawer.jsx';
import { Typography, Card, AppBar, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import PersistentDrawerLeft from "./Drawer.jsx";
import NewPatientForm from "./NewPatientForm.jsx";
import SearchResult from './SearchResult.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayData from './PatientDetails.jsx';


export default function App() {
  return (
    <Router>
      <CssBaseline />
      <PersistentDrawerLeft />
      
      <Routes>
        <Route path="/" exact element={<NewPatientForm />} />
        <Route path="/search" element={<SearchResult personList={searchResultList}/>} />
        <Route path={`/new-report/:patientId`} element={<CustomizedAccordions />} />
        <Route path={`/patient-details/:patientId`} element={<DisplayData />} />
      </Routes>
    </Router>
  );
}
