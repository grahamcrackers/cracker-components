import React, { FC } from 'react';
import classnames from 'classnames';

/**
 * MDL Chip Text
 */
export const ChipText: FC = ({ ...props }) => {
    const classes = classnames('mdl-chip__text');
    return <span className={classes} {...props} />;
};

export default ChipText;
