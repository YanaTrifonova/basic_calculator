import './App.css';
import React, {useState} from "react";
import githubImage from "./images/github.png"

function App() {
    const initialValue = 0;

    const [value, setValue] = useState(initialValue);
    const [memory, setMemory] = useState(initialValue);
    const [arithmeticActionValue, setArithmeticAction] = useState(initialValue);
    const [warning, setWarning] = useState(initialValue);

    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "AC", "+", "–", "x", "/", "=", "+/-"];

    function buttonClicked(event) {
        const buttonValue = event.target.innerHTML;

        console.log(`Button ${buttonValue} was clicked`);

        switch (buttonValue) {
            case "1" :
                displayValue();
                break;
            case "2" :
                displayValue();
                break;
            case "3" :
                displayValue();
                break;
            case "4" :
                displayValue();
                break;
            case "5" :
                displayValue();
                break;
            case "6" :
                displayValue();
                break;
            case "7" :
                displayValue();
                break;
            case "8" :
                displayValue();
                break;
            case "9" :
                displayValue();
                break;
            case "0" :
                displayValue();
                break;
            case "AC" :
                deleteResult();
                break;
            case "+":
            case "–":
            case "x":
            case "/" :
                arithmeticAction(buttons.indexOf(buttonValue));
                break;
            case "+/-":
                changeTheSign();
                break;
            case "=" :
                result();
                break;
            default :
                break;
        }

        function displayValue() {
            if (checkIfNumberSafe(value)) {
                if (value === 0) {
                    setValue(buttonValue);
                } else {
                    setValue(parseInt(value.toString() + buttonValue));
                }
            }
        }

        function deleteResult() {
            setWarning(0);
            setValue(initialValue);
            setMemory(initialValue);
            console.log(`value ${value}`);
        }

        function arithmeticAction(actionNumber) {
            setMemory(value);
            setValue(initialValue);
            setArithmeticAction(actionNumber);
        }

        function changeTheSign() {
            setValue(-value);
            console.log(`Value changed it sign ${value}`);
        }

        function result() {
            if (arithmeticActionValue !== -1) {
                let result;

                console.log(`First value was ${memory}`);
                console.log(`Second value is ${value}`);

                switch (arithmeticActionValue) {
                    case 11 :
                        console.log(`Arithmetic action ${buttons[arithmeticActionValue]}`);
                        result = parseFloat(memory) + parseFloat(value);
                        console.log(`Raw result without any checks ${result}`);
                        break;
                    case 12 :
                        console.log(`Arithmetic action ${buttons[arithmeticActionValue]}`);
                        result = parseFloat(memory) - parseFloat(value);
                        console.log(`Raw result without any checks ${result}`);
                        break;
                    case 13 :
                        console.log(`Arithmetic action ${buttons[arithmeticActionValue]}`);
                        result = parseFloat(memory) * parseFloat(value);
                        console.log(`Raw result without any checks ${result}`);
                        break;
                    case 14 :
                        console.log(`Arithmetic action ${buttons[arithmeticActionValue]}`);
                        result = parseFloat(memory) / parseFloat(value);
                        console.log(`Raw result without any checks ${result}`);
                        break;
                    default :
                        result = value;
                }

                if (checkIfNumberSafe(result)) {
                    setValue(result);
                    setArithmeticAction(-1);
                } else if (result === null) {
                    console.warning("Error occurred in arithmetic action!");
                }
            } else {
                console.log("Lets count something else! Press 'AC' button.");
            }
        }

        function checkIfNumberSafe(number) {
            if (number > Number.MAX_SAFE_INTEGER) {
                setWarning(1);
                console.warn("Too big integer!");
                return false;
            } else if (number < Number.MIN_SAFE_INTEGER) {
                setWarning(1);
                console.warn("Too small integer!");
                return false
            }

            return true;
        }
    }


    return (
        <div className="App">
            <a href={"https://github.com/YanaTrifonova/basic_calculator"} target={"/blanc"}>
                <img src={githubImage}
                     alt="This is github link"
                     className="github"/></a>
            <div className="calculator">
                <h1 className="display">{warning ? "Error.." : value}</h1>
                <div className="buttons">
                    {buttons.map((button, index) =>
                                     <button id={"button" + index}
                                             className="button" key={index}
                                             onClick={buttonClicked}>{button}
                                     </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
