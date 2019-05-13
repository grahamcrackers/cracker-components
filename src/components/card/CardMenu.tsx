import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

/**
 * MDL Card Menu
 */
export const CardMenu: FC = ({ ...props }) => {
    const classes = classnames('mdl-card__menu');
    return <InnerCard className={classes} {...props} />;
};

export default CardMenu;
