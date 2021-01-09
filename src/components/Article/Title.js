import React from "react";
import Heading from "../Typography/Heading";
import classes from "./article.module.css";

const ArticleTitle = ({ children, ...rest }) => {
    return <Heading weight={5} className={classes.article__title} {...rest}>{children}</Heading>
}

export default ArticleTitle;
