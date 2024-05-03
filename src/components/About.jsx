import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5" id="About" >
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Our fitness tracking website, powered by React JS, offers a seamless and intuitive experience for users passionate about their health journey. With sleek design and robust functionality, users can easily track their workouts, monitor progress, and set personalized goals.

          </p>

          <p>
            Our responsive interface ensures accessibility across devices, allowing users to stay connected to their fitness goals anytime, anywhere.
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
