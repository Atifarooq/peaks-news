import React from "react";
import Flex from "../Flex";
import classes from "./card.module.css";

const Card = ({
    children,
    title,
    description,
    sm = 12,
    md = 12,
    lg = 12,
    xl = 12,
    ...rest }) => {

    return (
        <Flex
            column {...rest}
            className={`${classes.card} 
                        ${classes[`card_sm_${sm}`]} 
                        ${classes[`card_md_${md}`]} 
                        ${classes[`card_lg_${lg}`]} 
                        ${classes[`card_xl_${xl}`]}`
            }>
            {children}
        </Flex>
    )
}

export default Card;
