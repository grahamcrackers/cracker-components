import React, { FC } from 'react';

export const ListItemTextBody: FC = ({ ...props }) => {
    return <span className="mdl-list__item-secondary-body" {...props} />;
};

export default ListItemTextBody;
