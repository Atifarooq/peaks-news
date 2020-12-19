import React from 'react';
import Flex from '../Flex';
import NavItem from './Item';
import Toggler from './Toggler';
import classes from './navbar.module.css';

const Navbar = ({ navigations }) => {

    return (
        <Flex as="nav" justifyBetween className={classes.nav}>
            <Toggler />
            <Flex className={classes.nav__items}>
                {
                    navigations && navigations.map(navigation =>
                        <NavItem key={navigation.id} className={classes.nav__items__link}>{navigation.title}</NavItem>)
                }
            </Flex>
            <Flex>
                Searchbox
            </Flex>
        </Flex>
    );
}

export default Navbar;
