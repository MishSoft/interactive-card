function InputForm({
  setHandleInputValue,
  cardName,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvc,
  isEmpty,
  setHandleValueSubmit,
  setIsFlipped,
}) {
  const handleCvcFocus = () => {
    setIsFlipped(true);
  };

  const handleCvcBlur = () => {
    setIsFlipped(false);
  };

  return (
    <form onSubmit={setHandleValueSubmit} className="input-form">
      <div className={`name-input ${isEmpty.nameError ? "error" : ""}`}>
        <label htmlFor="card-name">cardholder name</label>
        <input
          onChange={setHandleInputValue}
          name="cardName"
          id="card-name"
          type="text"
          placeholder="Jane Appleseed"
          value={cardName}
          aria-invalid={isEmpty.nameError}
        />
        {isEmpty.nameError && (
          <span id="card-name-error" className="error-text">
            Can’t be blank
          </span>
        )}
      </div>
      <div className={`number-input ${isEmpty.numberError ? "error" : ""}`}>
        <label htmlFor="card-number">card number</label>
        <input
          onChange={setHandleInputValue}
          name="cardNumber"
          id="card-number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          aria-invalid={isEmpty.numberError}
        />
        {isEmpty.numberError && (
          <span className="error-text">Can’t be blank</span>
        )}
      </div>
      <div className="date-div">
        <div className="month-year">
          <label htmlFor="month-input">exp. date (mm / yy)</label>
          <div className="month">
            <div className={`month-input ${isEmpty.monthError ? "error" : ""}`}>
              <input
                onChange={setHandleInputValue}
                name="cardMonth"
                id="month-input"
                type="text"
                placeholder="MM"
                value={cardMonth}
                maxLength={2}
                aria-invalid={isEmpty.monthError}
              />
              {isEmpty.monthError && (
                <span className="error-text">Can’t be blank</span>
              )}
            </div>
            <div className={`year-input ${isEmpty.yearError ? "error" : ""}`}>
              <input
                onChange={setHandleInputValue}
                name="cardYear"
                id="year-input"
                type="text"
                placeholder="YY"
                value={cardYear}
                maxLength={2}
                aria-invalid={isEmpty.yearError}
              />
              {isEmpty.yearError && (
                <span className="error-text">Can’t be blank</span>
              )}
            </div>
          </div>
        </div>
        <div className={`cvc-div ${isEmpty.cvcError ? "error" : ""}`}>
          <label htmlFor="cvc-input">cvc</label>
          <input
            onChange={setHandleInputValue}
            name="cardCvc"
            id="cvc-input"
            type="text"
            placeholder="e.g. 123"
            value={cardCvc}
            maxLength={3}
            onFocus={handleCvcFocus}
            onBlur={handleCvcBlur}
            aria-invalid={isEmpty.cvcError}
          />
          {isEmpty.cvcError && (
            <span className="error-text">Can’t be blank</span>
          )}
        </div>
      </div>
      <button className="confirm-button" type="submit">
        Confirm
      </button>
    </form>
  );
}

export default InputForm;
