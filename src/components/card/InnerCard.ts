import classnames from 'classnames';
import { createElement, FC } from 'react';

export interface InnerCardProps {
    type?: string;
    className?: string;
    hasBorder?: boolean;
}

/**
 * Base Element for Inner Card Components
 */
export const InnerCard: FC<InnerCardProps> = ({ type = 'div', hasBorder, className, children, ...props }) => {
    const classes = classnames(className, { 'mdl-card--border': hasBorder });
    return createElement(type, { class: classes, ...props }, children);
};
