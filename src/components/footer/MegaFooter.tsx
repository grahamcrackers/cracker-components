import React, { FC } from 'react';
import classnames from 'classnames';
import './mega_footer.scss';

/**
 * MDL Mega Footer
 */
export const MegaFooter: FC = ({ children }) => {
    const classes = classnames('mdl-mega-footer');
    return <div className={classes}>{children}</div>;
};

export default MegaFooter;
