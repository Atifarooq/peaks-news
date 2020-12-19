import React from "react";
import classes from './flex.module.css';

/**
 * Flex Box
 * @param {children} content e.g any HTML
 * @param {className} css class applies to root element e.g Flex
 * All Flex Properties
 * @param { flex }
 * @param { inline }
   Direction 
 * @param { row }
 * @param { rReverse }
 * @param { column }
 * @param { cReverse }
   Fill
 * @param { fill }
   Wrap
 * @param { nowrap }
 * @param { wrap }
 * @param { wrapReverse }
   Justify Content
 * @param { justifyStart }
 * @param { justifyEnd }
 * @param { justifyCenter }
 * @param { justifyBetween }
 * @param { justifyAround }
   Align Items
 * @param { itemsStart }
 * @param { itemsEnd }
 * @param { itemsCenter }
 * @param { itemsBaseline }
 * @param { itemsStretch }
   Align Self
 * @param { selfStart }
 * @param { selfEnd }
 * @param { selfCenter }
 * @param { selfBaseline }
 * @param { selfStretch }
   Align Content
 * @param { contentStart }
 * @param { contentEnd }
 * @param { contentCenter }
 * @param { contentAround }
 * @param { contentStretch }
   Responcive
 * @param { xs }
 * @param { contentEnd }
 * @param { contentCenter }
 * @param { contentAround }
 * @param { contentStretch }
 */
const Flex = ({ children, as = 'div', className, ...rest }) => {

  const Tag = `${as}`;
  const styles = Object.keys(rest).reduce((style, css) => `${style} ${classes[css]}`, `${classes.flex}`);

  return <Tag className={`${styles} ${className || ''}`.trim()}>{children}</Tag>;
};

export default Flex;
