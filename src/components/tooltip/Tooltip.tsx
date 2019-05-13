import React, { FC } from 'react';
import classnames from 'classnames';
import './tooltip.scss';

export interface TooltipProps {
    htmlFor: string;
    isLarge?: boolean;
    hasPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: FC<TooltipProps> = ({ htmlFor, isLarge = false, hasPosition = undefined, ...props }) => {
    const classes = classnames('mdl-tooltip', {
        'mdl-tooltip--large': isLarge,
        [`mdl-tooltip--${hasPosition}`]: hasPosition,
    });
    return <span className={classes} data-mdl-for={htmlFor} {...props} />;
};

export default Tooltip;
