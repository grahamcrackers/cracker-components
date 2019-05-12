import React, { FC } from 'react';
import classnames from 'classnames';

export interface LayoutTabPanelProps {
    isActive: boolean;
    id: string;
}

export const LayoutTabPanel: FC<LayoutTabPanelProps> = ({ isActive = false, id, children }) => {
    const classes = classnames('mdl-layout__tab-panel', {
        'is-active': isActive,
    });
    return (
        <section className={classes} id={id}>
            {children}
        </section>
    );
};

export default LayoutTabPanel;
