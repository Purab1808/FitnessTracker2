import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-[#222] rounded-t-3xl">
      <div className=" flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className=" w-full md:w-1/4">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitnessTracker</h1>
          </Link>
          <p className=" mt-4">
          Located 30 kms from Chandigarh, Chitkara University
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Address</h1>
          <p className=" mt-4">chitkara university ,near jansla village  ,patiala national hightway,punjab</p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Contact</h1>
          <div className=" flex flex-row items-center gap-6 mt-5">
            <AiTwotonePhone size={20} />
            <p>9142767825</p>
            <p>8168995334</p>
            <p>+917618625352</p>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>pritam683.be22@chitkara.edu.in</p>
            
          </div>
          <div className=" flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>purab692.be22@chitkara.edu.in</p>
           
          </div>
          <div className=" flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>pranav667.be22@chitkara.edu.in</p>
            
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mt-4">
          @copyright developed by{" "}
          <span className=" text-brightRed">chitkara programmer</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
