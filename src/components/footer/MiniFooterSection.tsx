import React, { FC } from 'react';
import classnames from 'classnames';

export interface IMiniFooterSectionProps {
    type: 'left' | 'right';
}

/**
 * MDL Footer
 */
export const MiniFooterSection: FC<IMiniFooterSectionProps> = ({ type, children }) => {
    const classes = classnames('mdl-mini-footer', {
        [`mdl-mini-footer__${type}-section`]: type,
    });
    return <div className={classes}>{children}</div>;
};

export default MiniFooterSection;
