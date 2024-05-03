import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className=" md:fixed flex flex-row justify-between md:px-32 px-5 p-5 gap-16">
        <div className=" flex items-center p-2">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitnessTracker App</h1>
          </Link>
        </div>

        <nav className=" hidden md:flex items-center p-2 gap-5">
          <a
            href="#home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Home
          </a>
          <a
           href="#feature"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Feature
          </a>
          <a
            href="#BMI"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            BMI
          </a>
          <a
          href="#About"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#trainers"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Trainers
          </a>
          <a
            href="#contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Contact Us
          </a>
        </nav>

        <div className="md:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>

      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white text-black left-0 hrefp-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <a
          href="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Home
        </a>
        <a
            href="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Feature
          </a>
        <a
          href="plans"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          BMI
        </a>
        <a
          href="about"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          About Us
        </a>
        <a
          href="trainers"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Trainers
        </a>
        <a
          href="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
