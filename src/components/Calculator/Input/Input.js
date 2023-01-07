import react from "react";
import "./Input.css";

const Input = ({ displayInput }) => {
    return (
        <div className="input">{!displayInput.length ? 0 : displayInput }</div>
    )
}

export default Input;