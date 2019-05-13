import React, { FC } from 'react';
import classnames from 'classnames';
import './chip.scss';

export interface IBaseComponentProps {
    hasContact?: boolean;
}

/**
 * MDL Card
 */
export const BaseComponent: FC<IBaseComponentProps> = ({ ...props }) => {
    const classes = classnames('mdl-chip');
    return <span className={classes} {...props} />;
};

export default BaseComponent;
