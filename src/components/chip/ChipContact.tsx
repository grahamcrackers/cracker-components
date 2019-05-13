import React, { FC } from 'react';
import classnames from 'classnames';

/**
 * MDL Chip Contact
 */
export const ChipContact: FC = ({ ...props }) => {
    const classes = classnames('mdl-chip__contact');
    return <span className={classes} {...props} />;
};

export default ChipContact;
