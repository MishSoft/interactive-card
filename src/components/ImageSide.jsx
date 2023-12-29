// import React from 'react'
import cardImageFront from "/public/assets/bitcampfront.svg";
import cardImageBack from "/public/assets/bitcampback.svg";
// import { useState } from "react";
function ImageSide({
  cardNumber,
  personName,
  cardMonth,
  cardYear,
  cardCvc,
  isFlipped,
}) {
  // const [isFlipped, setIsFlipped] = useState(false);
  const cardSideStyle = {
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };
  return (
    <div className="image-card">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        style={{ ...cardSideStyle }}
      >
        <div
          className="front"
          style={{ backgroundImage: `url(${cardImageFront})` }}
        >
          <h2 className="card-number">{cardNumber || `0000 0000 0000 0000`}</h2>
          <div className="name-date">
            <h2 className="name">{personName || `Name Username`}</h2>
            <h2 className="date">{`${cardMonth} / ${cardYear}` || `06/23`}</h2>
          </div>
        </div>
        <div
          className="back"
          style={{ backgroundImage: `url(${cardImageBack})` }}
        >
          <h2>{cardCvc || `123`}</h2>
        </div>
      </div>
    </div>
  );
}

export default ImageSide;
