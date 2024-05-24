import React, { useState } from 'react';
import './Calorie.css';

function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);
  const [dietPlan, setDietPlan] = useState(null);

  function calculateCalories() {
    let calculatedCalories = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') {
      calculatedCalories += 5;
    } else {
      calculatedCalories -= 161;
    }
    switch (activityLevel) {
      case 'sedentary':
        calculatedCalories *= 1.2;
        break;
      case 'lightlyActive':
        calculatedCalories *= 1.375;
        break;
      case 'moderatelyActive':
        calculatedCalories *= 1.55;
        break;
      case 'veryActive':
        calculatedCalories *= 1.725;
        break;
      case 'extraActive':
        calculatedCalories *= 1.9;
        break;
    }
    setCalories(calculatedCalories.toFixed(2));

    const diet = getDietPlan(calculatedCalories);
    setDietPlan(diet);
  }

  function getDietPlan(calories) {
    return {
      breakfast: `${(calories * 0.3).toFixed(0)} calories`,
      lunch: `${(calories * 0.4).toFixed(0)} calories`,
      dinner: `${(calories * 0.3).toFixed(0)} calories`,
    };
  }

  return (
    <div className="calorie-calculator">
      <h2>Calorie Calculator</h2>
      <div className="input-group">
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="input-field" />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="input-field">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div className="input-group">
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="input-field" />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="input-field" />
        </label>
      </div>
      <div className="input-group">
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="input-field">
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </label>
      </div>
      <button className="calculate-button" onClick={calculateCalories}>Calculate</button>
      {calories !== null && (
        <div className="result">
          <p>Your estimated daily calorie intake: {calories} calories</p>
          {dietPlan && (
            <div>
              <h3>Suggested Diet Plan:</h3>
              <ul>
                <li>Breakfast: {dietPlan.breakfast}</li>
                <li>Lunch: {dietPlan.lunch}</li>
                <li>Dinner: {dietPlan.dinner}</li>
              </ul>
            </div>
          )}
        </div>
        
      )}
    </div>
  );
}

export default CalorieCalculator;
