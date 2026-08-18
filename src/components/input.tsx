import "./input.css";

function Input({disabled, placeholder, type}) {
    return (
    <input className="mainInput" type={type}
    placeholder={placeholder} disabled={disabled}
    />
    );
}

export default Input;