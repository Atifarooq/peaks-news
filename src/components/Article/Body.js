import React from "react";
import Paragraph from "../Typography/Paragraph";
import classes from "./article.module.css";

const ArticleBody = ({ children, ...rest }) => {
    return <Paragraph className={classes.article__body} {...rest}>{children}</Paragraph>
}

export default ArticleBody;
