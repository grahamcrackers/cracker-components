import React, { FC } from 'react';
import classnames from 'classnames';

export interface TabsProps {
    hasRippleEffect?: boolean;
}

export const Tabs: FC<TabsProps> = ({ hasRippleEffect = false, children }) => {
    const classes = classnames('mdl-tabs', 'mdl-js-tabs', {
        'mdl-js-ripple-effect': hasRippleEffect,
    });
    return <div className={classes}>{children}</div>;
};

export default Tabs;
