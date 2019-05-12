import React, { FC } from 'react';
import classnames from 'classnames';

export interface LayoutTabBarProps {
    hasManualSwitch?: boolean;
}
/**
 * Layout Tab Bar
 * Convert this to use react context
 * @param children React Children
 */
export const LayoutTabBar: FC<LayoutTabBarProps> = ({ hasManualSwitch = false, children }) => {
    const classes = classnames('mdl-layout__tab-bar', {
        'mdl-layout__tab-manual-switch': hasManualSwitch,
    });
    return <div className={classes}>{children}</div>;
};

export default LayoutTabBar;
