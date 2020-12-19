import React from 'react';
import classes from './navbar.module.css';

const Toggler = () => {

    return (
        <>
            <input type="checkbox" className={classes.nav__check} id="nav-check" />
            <div className={classes.nav__btn}>
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </>
    );
}

export default Toggler;
