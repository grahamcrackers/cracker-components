import React, { FC } from 'react';
export interface LayoutNavLinkProps {
    text: string;
    to: string;
}
export const NavLink: FC<LayoutNavLinkProps> = ({ text, to, children }) => {
    return (
        <a className="mdl-navigation__link" href={to}>
            {text || children}
        </a>
    );
};

export default NavLink;
