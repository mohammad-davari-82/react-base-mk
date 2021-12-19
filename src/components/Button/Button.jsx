import React from "react";
import './Button.css';
const Button = ({children , onClick, className}) => <button onClick={onClick} className={className}>{children}</button>;
export default Button;