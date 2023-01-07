import react from "react";
import "./Button.css";

//Handler
/*
    check if the last index of the string is an operation.
    if it is an operation replace the string with whatever the new operation the user clicked.
    ///////
    3ADE + 61278590ABCED USE FUNCTION() ==> VALID OR NaN Function(`return ${}`)
    //Hold the operators in a stack.
    //Loop throw the string look for operators & replace the string with commas.
    //Validate each placement thats not an operator to see if its a number or hexidecimal
*/

const Button = ({ operations, display, displayInput, selectedClassname, setDisplayInput }) => {
    const equate = () => {
        if (!displayInput) return;

        const operationStack = [];
        const cleanDisplay = displayInput.split(/[+\-*/?~]/);
        for (let i = 0; i < displayInput.length; i += 1) {
            const char = displayInput[i];
            if (operations.includes(char)) operationStack.push(char);
        }

        let runEquation = ""; //1 
        console.log(cleanDisplay);
        cleanDisplay.forEach(item => {
            if (isNaN(parseInt(item, 16))) {
                setDisplayInput("NaN");
                return;
            } else {
                if (operationStack.length && !operations.includes(runEquation.slice(-1)) && runEquation.length) {
                    const operator = operationStack.shift();
                    runEquation += operator;
                }

                const changed = /^[A-Za-z\s]*$/.test(item) ? parseInt(item, 16) : item;
                runEquation += changed
                
                
            }

        });

        const result = eval(runEquation);
        setDisplayInput(`${result}`);
    }

    //clear
    if (display === "CLEAR") {
        return (
            <button 
                className={selectedClassname}
                onClick={() => setDisplayInput("")}
            >
                {display}
            </button>
        )
    }

    //equals
    if (display === "=") {
        return (
            <button 
                className={selectedClassname}
                onClick={() => equate()}
            >
                {display}
            </button>
        )
    }

    return (
        <button 
            className={selectedClassname}
            onClick={() => {
                let replacedOpDisplay = "";
                if (operations.includes(displayInput.slice(-1)) && operations.includes(display)) {
                    replacedOpDisplay = displayInput.replace(/.$/, display);
                    setDisplayInput(replacedOpDisplay);
                } else setDisplayInput(displayInput + `${display}`);
            }}
        >
            {display}
        </button>
    )
}

export default Button;