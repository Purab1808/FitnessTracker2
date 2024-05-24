import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Feature from "./components/Features";
import Quiz from "./components/Calorie";

const App = () => {
  return (
    <div>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><Feature/><Plans/><About/><Trainers/><Contact/></>} />
          <Route exact path="/quiz" element={<Quiz/>} /> 
          
        </Routes>
          <Footer />
        </Router>
    </div>
  );
};

export default App;
