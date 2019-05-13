import React, { FC } from 'react';
import classnames from 'classnames';
import './chip.scss';

export interface IChipProps {
    isContact?: boolean;
    isDeletable?: boolean;
}
/**
 * MDL Card
 */
export const Chip: FC<IChipProps> = ({ isContact, isDeletable, ...props }) => {
    const classes = classnames('mdl-chip', { 'mdl-chip--contact': isContact, 'mdl-chip--deletable': isDeletable });
    return <span className={classes} {...props} />;
};

export default Chip;
