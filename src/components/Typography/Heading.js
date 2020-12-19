import React from "react";
import classes from "./typography.module.css";

const Heading = ({ weight = 6, children, ...rest }) => {
    const Tag = `h${weight}`
    return (
        <Tag {...rest} className={`${classes[`h${weight}`]}`}>{children}</Tag>
    )
}

export default Heading;
