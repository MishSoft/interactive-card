// import React from 'react'

function Succses() {
  return (
    <div className="succes-container">
      <div className="succes-image">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          {" "}
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />{" "}
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div className="text-div">
        <h2>thanks you!</h2>
        <p>We’ve added your card details</p>
      </div>
      <button className="continue-button">Continues</button>
    </div>
  );
}

export default Succses;
