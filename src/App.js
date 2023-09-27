import React from "react";
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import CompanyInfo from "./components/CompanyInfo";

function App() {
  return (

      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/company" element={<CompanyInfo />} />
      </Routes>
  );
}

export default App;
