import React from "react";

import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import CompanyInfo from "./components/CompanyInfo";
import TableData from "./components/TableData"; 
import MyFooter from "./components/MyFooter";
import Signup from "./components/Signup"
import Login from "./Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/companyInfo" element={<CompanyInfo />} />
      <Route path="/" element={<TableData />} /> 
      <Route path="/paggination" element={<paggination />} /> 
      <Route path="/MyFooter" element={<MyFooter />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tabledata" element={<TableData/>} />
    </Routes>
    
  );
}

export default App;
