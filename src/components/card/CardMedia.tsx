import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

/**
 * MDL Card Media
 */
export const CardMedia: FC = ({ ...props }) => {
    const classes = classnames('mdl-card__media');
    return <InnerCard className={classes} {...props} />;
};

export default CardMedia;
