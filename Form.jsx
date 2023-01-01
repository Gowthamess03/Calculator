import React, { useState } from "react";

const Form = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    //This will avoid adding operators more than once continuously.
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return;

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const deleAll = () => {
   setResult('');
   setCalc('');
  };

  return (
    <div className="calculator">
      <div className="output">
        {/* <div className="previous"></div> */}
        <div className="current">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
      </div>
      <button className="span-two" onClick={deleAll}>
        AC
      </button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={() => updateCalc("/")}>/</button>
      <button onClick={() => updateCalc("1")}>1</button>
      <button onClick={() => updateCalc("2")}>2</button>
      <button onClick={() => updateCalc("3")}>3</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("4")}>4</button>
      <button onClick={() => updateCalc("5")}>5</button>
      <button onClick={() => updateCalc("6")}>6</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("7")}>7</button>
      <button onClick={() => updateCalc("8")}>8</button>
      <button onClick={() => updateCalc("9")}>9</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => updateCalc(".")}>.</button>
      <button onClick={() => updateCalc("0")}>0</button>
      <button className="span-two" onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default Form;
