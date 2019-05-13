import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

/**
 * MDL Card Title
 */
export const CardTitle: FC = props => {
    const classes = classnames('mdl-card__title');
    return <InnerCard className={classes} {...props} />;
};

export default CardTitle;
