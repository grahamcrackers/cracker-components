import React, { FC } from 'react';
import classnames from 'classnames';

export interface IFooterListProps {
    hasFooterType: 'mini' | 'mega';
}
/**
 * MDL Footer
 */
export const MiniFooterList: FC<IFooterListProps> = ({ hasFooterType, children }) => {
    const classes = classnames({ [`mdl-${hasFooterType}-footer__link-list`]: hasFooterType });
    return <ul className={classes}>{children}</ul>;
};

export default MiniFooterList;
