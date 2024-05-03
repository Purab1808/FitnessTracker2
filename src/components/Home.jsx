import React from "react";
import Button from "../layouts/Button";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat " id="home">
      <div className=" flex flex-col justify-center">
        <h1 className=" text-8xl font-semibold md:text-start text-center md:w-2/3">
          Your body, your rules.
        </h1>

        <div className="main">
          <div className="quiz">
            <Link to="quiz">Become a Member</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
