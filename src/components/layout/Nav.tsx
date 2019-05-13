import React, { FC } from 'react';
import classnames from 'classnames';
import { IScreenSizes } from '../common/interfaces/IScreenSize';

export const Nav: FC<IScreenSizes> = ({ largeScreenOnly, smallScreenOnly, children }) => {
    const classes = classnames('mdl-navigation', {
        'mdl-layout--large-screen-only': largeScreenOnly,
        'mdl-layout--small-screen-only': smallScreenOnly,
    });

    return <nav className={classes}>{children}</nav>;
};

export default Nav;
