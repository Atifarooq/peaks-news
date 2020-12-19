import React from "react";

const Label = ({ children, ...rest }) => {
    return (
        <label {...rest}>{children}</label>
    )
}

export default Label;
