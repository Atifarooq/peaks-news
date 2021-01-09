import React from "react";
import classes from "./button.module.css";

const Button = ({ children, ...rest }) => {

    return <button className={`${classes.button} ${classes.button__primary}`} {...rest}>{children}</button>;
};

export default Button;
