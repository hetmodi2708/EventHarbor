import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import AllEvents from "./components/AllEvents";
import Event_description from "./components/Event_description";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/event/:id" element={<Event_description />} />
      </Routes>
    </Router>
  );
};

export default App;
