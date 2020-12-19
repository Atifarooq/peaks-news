import React from 'react';
import Brand from '../Brand';
import Container from '../Container';
import Flex from '../Flex';
import Navbar from '../Navbar';
import classes from './topbar.module.css'

const TopBar = () => {

    return (
        <Flex justifyAround className={classes.topbar}>
            <Container>
                <Brand />
                <Navbar />
            </Container>
        </Flex>
    );
}

export default TopBar;
