import React, { FC } from 'react';
import classnames from 'classnames';
import { IRippleEffect } from '../interfaces/IRippleEffect';

export interface IMenuProps extends IRippleEffect {
    hasPosition?: 'top-left' | 'top-right' | 'bottom-right';
}
/**
 * MDL Menu
 */
export const Menu: FC<IMenuProps> = ({ hasPosition, hasRippleEffect = false, children }) => {
    const classes = classnames('mdl-menu', 'mdl-js-menu', {
        [`mdl-menu--${hasPosition}`]: hasPosition,
        'mdl-js-ripple-effect': hasRippleEffect,
    });
    return <ul className={classes}>{children}</ul>;
};

export default Menu;
