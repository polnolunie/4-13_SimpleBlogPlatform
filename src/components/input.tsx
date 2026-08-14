import "./input.css";

function Input({disabled}) {
    return (
    <input className="mainInput" type="text" 
    placeholder="This is text" disabled={disabled}
    />
    );
}

export default Input;