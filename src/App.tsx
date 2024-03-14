import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [firstNumber, setFirstNumber] = useState(0);

  const [secondNumber, setSecondNumber] = useState(0);

  const numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const operators: string[] = ["/", "X", "-", "+", "="];

  const handleAllClear = () => {
    setCount(0);
    setFirstNumber(0);
    setSecondNumber(0);
  };

  const handleNumberClick = (number: number) => {
    if (count === 0) {
      setCount(number);
    } else if (count > 0 && count < 10) {
      setCount(count * 10 + number);
    } else if (count > 10 && count < 100) {
      setCount(count * 10 + number);
    } else {
      alert("You can't enter more than 3 digits");
    }
  };

  const handleOperatorClick = (operators: string) => {
    if (!operators[4] && firstNumber === 0 && secondNumber === 0) {
      setFirstNumber(count);
      setCount(0);
    } else if (!operators[4] && firstNumber !== 0 && secondNumber === 0) {
      setSecondNumber(count);
    } else if (!operators[4] && firstNumber !== 0 && secondNumber !== 0) {
      alert("You only can calculate two numbers at a time");
    } else if (operators[4] && firstNumber !== 0 && secondNumber !== 0) {
      if (operators[0]) {
        setCount(firstNumber / secondNumber);
      } else if (operators[1]) {
        setCount(firstNumber * secondNumber);
      } else if (operators[2]) {
        setCount(firstNumber - secondNumber);
      } else if (operators[3]) {
        setCount(firstNumber + secondNumber);
      } else {
        alert("You can't calculate");
      }
    }
  };

  console.log(count, firstNumber, secondNumber);
  return (
    <>
      <div className="wrapper">
        <div className="counter">
          <p>{count}</p>
        </div>
        <div className="button-wrapper">
          <div className="left-side">
            <button
              className="ac"
              onClick={() => {
                handleAllClear();
              }}
            >
              AC
            </button>
            <div className="numbers-wrapper">
              {numbers.map((number, index) => {
                return (
                  <button
                    className="numbers"
                    key={index}
                    onClick={() => {
                      handleNumberClick(number);
                    }}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="right-side">
            {operators.map((operator, index) => {
              return (
                <button
                  className="operators"
                  key={index}
                  onClick={() => {
                    handleOperatorClick(operators[index]);
                  }}
                >
                  {operator}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
