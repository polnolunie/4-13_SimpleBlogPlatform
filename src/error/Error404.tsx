import React from 'react';
import "./Error.css";
import Cat from "./cat.png";

const PageNotFound = () => {
    return (
<div className="errorContainer">
    <h1>
        There is nothing...
    </h1>
    <p>Exept cat</p>
    <img src={Cat} alt="black cat image" />
</div>
    );
}