import React, { FC } from 'react';
import classnames from 'classnames';
import './spinner.scss';

export interface SpinnerProps {
    isActive?: boolean;
    isSingleColor?: boolean;
}

/**
 * MDL Spinner
 */
export const Spinner: FC<SpinnerProps> = ({ isActive = false, isSingleColor = false, ...props }) => {
    const classes = classnames('mdl-progress', 'mdl-js-progress', {
        'is-active': isActive,
        'mdl-spinner--single-color': isSingleColor,
    });
    return <div className={classes} {...props} />;
};

export default Spinner;
