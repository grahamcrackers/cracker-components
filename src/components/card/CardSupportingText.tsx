import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

/**
 * MDL Card Title
 */
export const CardSubtitleText: FC = ({ ...props }) => {
    const classes = classnames('mdl-card__supporting-text');
    return <InnerCard className={classes} {...props} />;
};

export default CardSubtitleText;
