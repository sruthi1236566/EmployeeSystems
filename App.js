import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UpdateEmployeeComponent from './Components/updateEmployeeComponent';
import ViewEmployee from './Components/ViewEmployee';

import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />

            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/addEmp" element={<CreateEmployeeComponent />} />
            <Route path="/updEmp/:id" element={<UpdateEmployeeComponent />} />
            <Route path="/viewEmp/:id" element={<ViewEmployee/>} />

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}


export default App;
