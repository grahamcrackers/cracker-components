import React, { FC } from 'react';
import classnames from 'classnames';

/**
 * Tab Bar
 * Convert this to use react context
 * @param children React Children
 */
export const TabBar: FC = ({ children }) => {
    const classes = classnames('mdl-tabs__tab-bar');
    return <div className={classes}>{children}</div>;
};

export default TabBar;
