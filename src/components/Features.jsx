import React from "react";
import './Feature.css'

const Feature = () => {
  return (
    <div className="about" id="feature">
        <div className="food">
          <div className="pic1">
            <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-large.92122bef.png&w=512&q=75" alt="" />
          </div>
          <div className="con1">
            <h3>Track food, fitness & fasting</h3>
            <p>Tracking calories and macros is easy with our barcode scanner and device integration.</p>
          </div>
        </div>

        <div className="learn">
          <div className="con1">
            <h3>Learn what works</h3>
            <p>Personalized nutrition insights reveal what's working so you can make smarter choices.</p>
          </div>
          <div className="pic1">
            <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn-what-works-large.e541991a.png&w=512&q=75" alt="" />
          </div>
        </div>

        <div className="change">
          <div className="pic1">
            <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchange-your-habits-large.1cf58b0c.png&w=512&q=75" alt="" />
          </div>
          <div className="con1">
            <h3>Change your habits and reach your goals</h3>
            <p>Now you have the tools and knowledge to build healthy habits for life.</p>
          </div>
        </div>
      </div>
  );
};

export default Feature;
