import React, { FC } from 'react';
import classnames from 'classnames';

export interface ListItemProps {
    hasLines?: 'two' | 'three';
}

export const ListItem: FC<ListItemProps> = ({ hasLines = undefined, ...props }) => {
    const classes = classnames('mdl-list__item', {
        [`mdl-list__item--${hasLines}-line`]: hasLines,
    });
    return <li className={classes} {...props} />;
};

export default ListItem;
