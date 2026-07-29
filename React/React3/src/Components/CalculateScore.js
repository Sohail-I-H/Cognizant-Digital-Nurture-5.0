import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  const average = props.Total / props.goal;

  return (
    <div className="container">
      <h2>Student Details</h2>

      <p><strong>Name:</strong> {props.Name}</p>
      <p><strong>School:</strong> {props.School}</p>
      <p><strong>Total Score:</strong> {props.Total}</p>
      <p><strong>Goal:</strong> {props.goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;