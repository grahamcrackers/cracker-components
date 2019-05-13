import React, { FC } from 'react';
import classnames from 'classnames';
import { InnerCard } from './InnerCard';

export interface CardTitleTextProps {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * MDL Card Title
 */
export const CardTitleText: FC<CardTitleTextProps> = ({ type = 'h2', ...props }) => {
    const classes = classnames('mdl-card__title-text');
    return <InnerCard className={classes} {...props} />;
};

export default CardTitleText;
