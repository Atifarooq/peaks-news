import React from "react";
import classes from './flex.module.css';

/**
 * Flex Box
 * @param {children} content e.g any HTML
 * @param {className} css class applies to root element e.g Flex
 * All Flex Properties
 * @param { flex }
 * @param { inline }
 */
const IconButton = ({ children, className, ...rest }) => {

    const styles = Object.keys(rest).reduce((style, css) => `${style} ${classes[css]}`, `${classes.flex}`);
    
    return <button className={`${styles} ${className || ''}`.trim()}>{children}</button>;
};

export default IconButton;
