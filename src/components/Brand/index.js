import React from 'react';
import Flex from '../Flex';
import Heading from '../Typography/Heading';
import classes from './brand.module.css';

const Brand = () => {

    return (
        <Flex column itemsCenter className={classes.brand}>
            <Heading weight={4} className={classes.brand__head__subhead}>The</Heading>
            <Heading weight={1} className={classes.brand__head}>Peaks</Heading>
        </Flex>
    );
}

export default Brand;
