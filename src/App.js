import React from 'react';
import './App.css';
import { Home } from "./pages/Home.js";
import "./pages/Place.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Place from "./pages/Place.js";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/place" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

