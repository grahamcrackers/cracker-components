import React, { FC } from 'react';
import classnames from 'classnames';

export interface IFooterSocialButtonProps {
    hasFooterType: 'mini' | 'mega';
}

/**
 * MDL Footer Social Button
 */
export const FooterSocialButton: FC<IFooterSocialButtonProps> = ({ hasFooterType, children }) => {
    const classes = classnames({ [`mdl-${hasFooterType}-footer__social-btn`]: hasFooterType });
    return <button className={classes}>{children}</button>;
};

export default FooterSocialButton;
