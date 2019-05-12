import React, { FC } from 'react';
import classnames from 'classnames';

export interface TabsPanelProps {
    isActive?: boolean;
    id: string;
}

export const TabsPanel: FC<TabsPanelProps> = ({ isActive = false, id, children }) => {
    const classes = classnames('mdl-tabs__panel', {
        'is-active': isActive,
    });
    return (
        <div className={classes} id={id}>
            {children}
        </div>
    );
};

export default TabsPanel;
