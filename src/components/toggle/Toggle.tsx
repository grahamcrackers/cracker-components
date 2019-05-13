import React, { FC } from 'react';
import classnames from 'classnames';

export const Tooltip: FC = ({ ...props }) => {
    const classes = classnames('mdl-tooltip');
    return <div className={classes} {...props} />;
};

export default Tooltip;
