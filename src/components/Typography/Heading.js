import React from "react";
import classes from "./typography.module.css";

const Heading = ({ weight = 6, children, className, ...rest }) => {
    const Tag = `h${weight}`;
    return (
        <Tag {...rest} className={`${classes[`h${weight}`]} ${className || ''}`}>{children}</Tag>
    )
}

export default Heading;
