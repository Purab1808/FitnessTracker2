import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <nav className={`flex items-center justify-between fixed top-0 w-full z-10 transition-colors duration-500 ${scrolling ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <h1 className="font-semibold text-2xl text-brightRed">FitnessTracker App</h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="home" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer mx-4">Home</Link>
            <Link to="feature" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer mx-4">Feature</Link>
            <Link to="BMI" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer mx-4">BMI</Link>
            <Link to="About" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer mx-4">About Us</Link>
            <Link to="trainers" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer mx-4">Trainers</Link>
            <Link to="contact" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer mx-4">Contact Us</Link>
          </div>

          <div className="md:hidden flex items-center" onClick={handleChange}>
            <AiOutlineMenuUnfold size={28} />
          </div>
        </div>

        <div className={`md:hidden flex flex-col absolute bg-white text-black left-0 pt-20 font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300 ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
          <Link to="home" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer">Home</Link>
          <Link to="feature" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer">Feature</Link>
          <Link to="BMI" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer">BMI</Link>
          <Link to="About" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer">About Us</Link>
          <Link to="trainers" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer">Trainers</Link>
          <Link to="contact" spy={true} smooth={true} duration={250} className="hover:text-brightRed transition-all cursor-pointer">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
