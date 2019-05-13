import React, { FC } from 'react';
import classnames from 'classnames';
import './snackbar.scss';

export interface SnackbarProps {
    isActive?: boolean;
}

export const Snackbar: FC<SnackbarProps> = ({ isActive = false, children }) => {
    const classes = classnames('mdl-snackbar', 'mdl-js-snackbar', {
        'mdl-snackbar--active': isActive,
    });
    return <div className={classes}>{children}</div>;
};

export default Snackbar;
