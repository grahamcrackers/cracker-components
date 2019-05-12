import React, { FC } from 'react';
import classnames from 'classnames';

export interface LayoutTabProps {
    link: string;
    isActive: boolean;
}

export const LayoutTab: FC<LayoutTabProps> = ({ link, isActive = false, children }) => {
    const classes = classnames('mdl-layout__tab-bar', {
        'is-active': isActive,
    });
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={link} className={classes}>
            {children}
        </a>
    );
};

export default LayoutTab;
