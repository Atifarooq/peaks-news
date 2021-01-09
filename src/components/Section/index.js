import React from "react";
import Flex from "../Flex";
import Header from "./Header";
import classes from "./section.module.css";

const Section = ({ children, title, toolbar }) => {

    return (
        <Flex column className={classes.section}>
            <Header title={title}>
                {toolbar}
            </Header>
            <Flex wrap>
                {children}
            </Flex>
        </Flex>
    )
}

export default Section;
