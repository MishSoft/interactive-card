import { useState } from "react";
import ImageSide from "./components/ImageSide";
import InputForm from "./components/InputForm";
import Succses from "./components/Succses";

function App() {
  const [inputData, setInputData] = useState({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });

  const [valueEmptyError, setValueEmptyError] = useState({
    nameError: false,
    numberError: false,
    monthError: false,
    yearError: false,
    cvcError: false,
  });

  const [isSucces, setIsSucces] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const calculateErrorState = () => {
    const errors = {
      nameError: inputData.cardName === "",
      numberError: inputData.cardNumber === "",
      monthError: inputData.cardMonth === "",
      yearError: inputData.cardYear === "",
      cvcError: inputData.cardCvc === "",
    };

    if (Object.values(errors).some((error) => error)) {
      return errors;
    }

    return null;
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;

    if (name === "cardMonth" && value.length === 2) {
      document.getElementById("year-input").focus();
    }

    let newErrorState = { ...valueEmptyError };

    if (name === "cardNumber") {
      const newValue = value.replace(/\D/g, "");
      const formattedValue = newValue.replace(/(\d{4})/g, "$1 ").trim();
      const limitedValue = formattedValue.substring(0, 19);

      setInputData((prevData) => ({
        ...prevData,
        [name]: limitedValue,
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    newErrorState[name + "Error"] = value === "";
    setValueEmptyError(newErrorState);
  };

  const handleValueSubmit = (e) => {
    e.preventDefault();
    const newErrorState = calculateErrorState();

    if (
      newErrorState &&
      Object.keys(newErrorState).some((key) => newErrorState[key])
    ) {
      setValueEmptyError(newErrorState);
      return;
    }

    setIsSucces(true);
  };

  return (
    <div className="container">
      {isSucces ? (
        <Succses />
      ) : (
        <>
          <ImageSide
            cardNumber={inputData.cardNumber}
            personName={inputData.cardName}
            cardMonth={inputData.cardMonth}
            cardYear={inputData.cardYear}
            cardCvc={inputData.cardCvc}
            isFlipped={isFlipped}
          />
          <InputForm
            setHandleInputValue={handleInputValue} // Pass the handler to InputForm
            cardName={inputData.cardName}
            cardNumber={inputData.cardNumber}
            cardMonth={inputData.cardMonth}
            cardYear={inputData.cardYear}
            cardCvc={inputData.cardCvc}
            setHandleValueSubmit={handleValueSubmit}
            isEmpty={valueEmptyError}
            setIsFlipped={setIsFlipped}
          />
        </>
      )}
    </div>
  );
}

export default App;
