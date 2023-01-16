import React from 'react';
import './App.css';

// React-router-dom
import { BrowserRouter, Routes, Route, UseNavigate, useNavigate } from "react-router-dom";

import EmployeesList from './views/EmployeesList';
import Homepage from './views/Homepage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            exact path='/'
            element={<Homepage />}
          />
          <Route
            exact path='/list'
            element={<EmployeesList />}
          />
        </Routes>
      </BrowserRouter>   
    </>
  );
}

export default App;
