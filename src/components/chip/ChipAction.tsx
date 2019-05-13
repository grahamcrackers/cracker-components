import React, { FC } from 'react';
import classnames from 'classnames';

/**
 * MDL Chip Text
 */
export const ChipAction: FC = ({ ...props }) => {
    const classes = classnames('mdl-chip__action');
    return <button className={classes} {...props} />;
};

export default ChipAction;
