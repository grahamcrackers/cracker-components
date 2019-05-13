import React, { FC } from 'react';
import classnames from 'classnames';

export interface IMenuProps {
    hasFullBleedDivider?: boolean;
}
/**
 * MDL Menu Item
 */
export const Menu: FC<IMenuProps> = ({ hasFullBleedDivider, children }) => {
    const classes = classnames('mdl-menu__item', {
        'mdl-menu__item--full-bleed-divider': hasFullBleedDivider,
    });
    return <li className={classes}>{children}</li>;
};

export default Menu;
