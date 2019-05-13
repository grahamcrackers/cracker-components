import React, { FC, ReactChild } from 'react';

export interface ListItemPrimaryContentProps {
    children: ReactChild;
}

export const ListItemPrimaryContent: FC<ListItemPrimaryContentProps> = ({ children, ...props }) => {
    return (
        <a className="mdl-list__item-secondary-action" {...props}>
            {children}
        </a>
    );
};

export default ListItemPrimaryContent;
