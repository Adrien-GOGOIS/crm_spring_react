import React from 'react';
import './App.css';

// React-router-dom
import { BrowserRouter, Routes, Route, UseNavigate, useNavigate } from "react-router-dom";

import EmployeesList from './views/EmployeesList';
import Homepage from './views/Homepage';
import AddEmployee from './views/AddEmployee';
import Navbar from './components/Navbar';
import ModifyEmployee from './views/ModifyEmployee';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            exact path='/'
            element={<Homepage />}
          />
          <Route
            exact path='/list'
            element={<EmployeesList />}
          />
          <Route 
            exact path='/add'
            element={<AddEmployee />}
          />
          <Route 
            path='/modify/:id'
            element={<ModifyEmployee />}
          />
        </Routes>
      </BrowserRouter>   
    </>
  );
}

export default App;
