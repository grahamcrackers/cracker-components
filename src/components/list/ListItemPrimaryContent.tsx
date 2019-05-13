import React, { FC } from 'react';

export const ListItemPrimaryContent: FC = ({ ...props }) => {
    return <span className="mdl-list__item-primary-content" {...props} />;
};

export default ListItemPrimaryContent;
