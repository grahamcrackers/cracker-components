import classnames from 'classnames';
import React, { FC, HTMLProps } from 'react';
import './button.scss';
import { IRippleEffect } from '../common/interfaces/IRippleEffect';

export type ButtonType = 'raised' | 'fab' | 'mini-fab' | 'icon';
export type ColorModifiers = 'colored' | 'accent';

export interface IButtonProps extends IRippleEffect {
    type?: ButtonType;
    colored?: ColorModifiers | boolean;
}

/**
 * Button Component
 */
export const Button: FC<IButtonProps & HTMLProps<HTMLButtonElement>> = ({
    type = undefined,
    colored = false,
    hasRippleEffect = false,
    children,
    ...props
}) => {
    // If colored is true return the 'colored' string else return the string
    const color: string = typeof colored === 'boolean' && true ? 'colored' : colored;

    const classes = classnames('mdl-button', 'mdl-js-button', {
        [`mdl-button--${type}`]: type,
        [`mdl-button--${color}`]: colored,
        'mdl-js-ripple-effect': hasRippleEffect,
    });

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
