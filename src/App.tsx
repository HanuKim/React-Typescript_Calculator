import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [memory, setMemory] = useState(0);
  const [operator, setOperator] = useState("");
  const [error, setError] = useState(false);

  const numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const operators: string[] = ["/", "X", "-", "+", "="];

  const calculate = (a: number, b: number, operator: string) => {
    const operations: { [key: string]: (a: number, b: number) => number } = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      X: (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    const result = operations[operator](a, b);
    if (!isFinite(result)) {
      // 무한대 또는 계산 불가능한 결과인 경우 체크
      setError(true);
      return 0; // 상태의 타입에 맞추기 위해 0을 반환
    }

    return Math.floor(result);
  };

  const handleAllClear = () => {
    setDisplay(0);
    setMemory(0);
  };

  const handleNumberClick = (number: number) => {
    if (error) {
      setError(false);
      setDisplay(number);
    }
    if (memory === 0) {
      if (display === 0) {
        setDisplay(number);
      } else if (display > 0 && display < 10) {
        setDisplay(display * 10 + number);
      } else if (display > 10 && display < 100) {
        setDisplay(display * 10 + number);
      } else {
        alert("You can't enter more than 3 digits");
      }
    } else {
      setDisplay(0);
      if (display === 0) {
        setDisplay(number);
      } else if (display > 0 && display < 10) {
        setDisplay(display * 10 + number);
      } else if (display > 10 && display < 100) {
        setDisplay(display * 10 + number);
      } else {
        alert("You can't enter more than 3 digits");
        setDisplay(display);
      }
    }
  };

  const handleOperatorClick = (operators: string) => {
    if (operators === "=") {
      if (memory === 0 || !operator) {
        return;
      }
      setError(false);
      const result = calculate(memory, display, operator);
      setDisplay(result);
      setMemory(0);
      setOperator("");
    } else {
      if (memory !== 0 && operator !== "" && display !== 0) {
        alert("You can calculate only two numbers at a time");
        return;
      }
      setError(false);
      setMemory(display);
      setOperator(operators);
      setDisplay(0);
    }
  };

  console.log(display, memory, operator);
  return (
    <>
      <div className="wrapper">
        <div className="counter">
          <p>{error ? "Error" : display}</p>
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
