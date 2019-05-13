import React, { FC } from 'react';
import classnames from 'classnames';
import './card.scss';

export interface ICardProps {
    hasBorder?: boolean;
    hasShadow?: 2 | 4 | 6 | 8 | 16;
    className?: string;
}
/**
 * MDL Card
 */
export const Card: FC<ICardProps> = ({ hasBorder, hasShadow, className, children }) => {
    const classes = classnames('mdl-card', { [`mdl-shadow--${hasShadow}dp`]: hasShadow }, className);
    return <div className={classes}>{children}</div>;
};

export default Card;
