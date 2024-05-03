import React from "react";
import './Plans.css'

const Plans = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
      document.getElementById('result').innerHTML = "Please enter valid height and weight.";
      return;
    }

    const bmi = calculateBMI(height, weight);
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }

  const calculateBMI = (height, weight) => {
    return weight / ((height / 100) * (height / 100));
  }

  return (
    <div className="BMI" id="BMI">
      <div className="container">
        <form id="bmiForm" onSubmit={handleSubmit}>
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" name="height" required />
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" name="weight" required />
          <input type="submit" value="Calculate BMI" />
        </form>
        <div className="result" id="result"></div>
      </div>

      <div className="BMIimg">
        <img src="image.png" alt="" />
      </div>
    </div>
  );
}; ``

export default Plans;

      

