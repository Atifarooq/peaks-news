import React from "react";

const Paragraph = ({ children, ...rest }) => {
    return (
        <p {...rest}>{children}</p>
    )
}

export default Paragraph;
