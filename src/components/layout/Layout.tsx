import classnames from 'classnames';
import React, { FC } from 'react';
import './layout.scss';

export interface ILayoutProps {
    className: string;
    hasFixedDrawer?: boolean;
    hasFixedHeader?: boolean;
    hasFixedTabs?: boolean;
    hasNoDrawerButton?: boolean;
    hasNoDesktopDrawerButton?: boolean;
}

export const Layout: FC<ILayoutProps> = ({
    hasFixedDrawer,
    hasFixedHeader,
    hasFixedTabs,
    hasNoDrawerButton,
    hasNoDesktopDrawerButton,
    className,
    children,
}) => {
    const classes = classnames(
        'mdl-layout',
        'mdl-js-layout',
        {
            'mdl-layout--fixed-drawer': hasFixedDrawer,
            'mdl-layout--fixed-header': hasFixedHeader,
            'mdl-layout--fixed-tabs': hasFixedTabs,
            'mdl-layout--no-drawer-button': hasNoDrawerButton,
            'mdl-layout--no-desktop-drawer-button': hasNoDesktopDrawerButton,
        },
        className,
    );
    return <div className={classes}>{children}</div>;
};

export default Layout;
