import React, { FC } from 'react';
import classnames from 'classnames';

export interface IMegaFooterSectionProps {
    type: 'top' | 'right' | 'bottom' | 'left' | 'drop-down';
}

/**
 * MDL Footer
 */
export const MegaFooterSection: FC<IMegaFooterSectionProps> = ({ type, children }) => {
    const classes = classnames('mdl-mega-footer', {
        [`mdl-mega-footer__${type}-section`]: type,
    });
    return <div className={classes}>{children}</div>;
};

export default MegaFooterSection;
