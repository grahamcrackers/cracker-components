import React, { FC } from 'react';
import classnames from 'classnames';

export interface TabsTabProps {
    link: string;
    isActive: boolean;
}

export const TabsTab: FC<TabsTabProps> = ({ link, isActive = false, children }) => {
    const classes = classnames('mdl-tabs__tab', {
        'is-active': isActive,
    });
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={link} className={classes}>
            {children}
        </a>
    );
};

export default TabsTab;
