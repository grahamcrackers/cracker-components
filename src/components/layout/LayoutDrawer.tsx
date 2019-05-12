import React, { FC } from 'react';

export const LayoutDrawer: FC = ({ children }) => {
    return <div className="mdl-layout__drawer">{children}</div>;
};

export default LayoutDrawer;
