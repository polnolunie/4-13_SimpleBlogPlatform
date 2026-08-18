import "./input.css";

function Input({disabled, placeholder, type, register}) {
    return (
    <input className="mainInput"
    type={type}
    placeholder={placeholder} 
    disabled={disabled}
    {...register}
    />
    );
}

export default Input;