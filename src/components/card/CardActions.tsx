import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

/**
 * MDL Card Actions
 */
export const CardActions: FC = ({ ...props }) => {
    const classes = classnames('mdl-card__actions');
    return <InnerCard className={classes} {...props} />;
};

export default CardActions;
