import { useState } from 'react'
import Navbar from './components/Navbar'
import NewPatient from './components/NewPatient.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css'
import NewReportForm from './components/newReport';
// In your main JavaScript file (e.g., index.js or App.js)
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {


  return (
    <Router>
        <Home />
    </Router>
  )
}

export default App
