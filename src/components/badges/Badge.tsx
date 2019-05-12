import classnames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, createElement } from 'react';
import './badge.scss';

export interface IBadgeProps {
    type?: any;
    hasNoBackground?: boolean;
    hasOverlap?: boolean;
    data: string | number;
}

/**
 * MDL Badge Component
 */
export const Badge: FC<IBadgeProps> = ({ type = 'div', hasNoBackground, hasOverlap, data, children }) => {
    const classes = classnames('mdl-badge', {
        'mdl-badge--no-background': hasNoBackground,
        'mdl-badge--overlap': hasOverlap,
    });

    return createElement(type, { class: 'material-icons ' + classes, 'data-badge': data }, children);
};

export default Badge;
