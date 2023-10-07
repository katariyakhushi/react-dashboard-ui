import React from "react";

import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import CompanyInfo from "./components/CompanyInfo";
import TableData from "./components/TableData"; 
import MyFooter from "./components/MyFooter";
import Signup from "./components/Signup"
import paggination from './components/paggination.1';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/company" element={<CompanyInfo />} />
      <Route path="/" element={<TableData />} /> 
      <Route path="/paggination" element={<paggination />} /> 
      <Route path="/MyFooter" element={<MyFooter />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
