import React, { FC } from 'react';
import classnames from 'classnames';

/**
 * MDL Logo
 */
export const Logo: FC = ({ children }) => {
    const classes = classnames('mdl-logo');
    return <div className={classes}>{children}</div>;
};

export default Logo;
