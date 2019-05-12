import React, { FC } from 'react';
import classnames from 'classnames';
import './mini_footer.scss';

/**
 * MDL Mini Footer
 */
export const MiniFooter: FC = ({ children }) => {
    const classes = classnames('mdl-mini-footer');
    return <div className={classes}>{children}</div>;
};

export default MiniFooter;
