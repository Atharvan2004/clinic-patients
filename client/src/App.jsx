import { useState } from 'react'
import Navbar from './components/Navbar'
import NewPatient from './components/NewPatient.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css'

function App() {


  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/" component={Navbar } />
          {/* <Route path="/edit" component={Edit} /> */}
          <Route path="/newPatient" component={Home} />
          {/* <Route path="/search" component={Search} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
