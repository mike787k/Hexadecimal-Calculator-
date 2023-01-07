import react, { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import "./Calculator.css";

const Calculator = () => {
    const [displayInput, setDisplayInput] = useState("");

    const numericButtons = [0,1,2,3,4,5,6,7,8,9];
    const alphaButtons = ["A", "B", "C", "D", "E", "F", ".", "="];
    const operations = ["+", "-", "/", "*", "CLEAR"];

    return (
        <div className="calculator">
            <Input displayInput={displayInput}/>
            <div className="button-ctn">
                {operations.concat(numericButtons, alphaButtons).map(button => {
                    let selectedClassname = "";
                    if (numericButtons.includes(button)) selectedClassname="numeric-btn";
                    else if (alphaButtons.includes(button)) selectedClassname="alpha-btn";
                    else if (operations.includes(button)) selectedClassname="operations-btn";
                    return (
                        <Button 
                            operations={operations}
                            selectedClassname={selectedClassname} 
                            key={button} 
                            display={button}
                            displayInput={displayInput}
                            setDisplayInput={setDisplayInput}
                        />)
                })}
            </div>
        </div>
    )
}

export default Calculator;