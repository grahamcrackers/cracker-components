import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

/**
 * MDL Card Title
 */
export const CardSubtitleText: FC = ({ ...props }) => {
    const classes = classnames('mdl-card__subtitle-text');
    return <InnerCard className={classes} {...props} />;
};

export default CardSubtitleText;
