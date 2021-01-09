import React from "react";
import Flex from "../Flex";
import Heading from "../Typography/Heading";
import classes from "./section.module.css";

const Header = ({ children, title }) => {

    return (
        <Flex equal justifyBetween itemsCenter className={classes.section__header}>
            <Heading weight={3}>{title}</Heading>
            <Flex>
                {children}
            </Flex>
        </Flex>
    )
}

export default Header;
