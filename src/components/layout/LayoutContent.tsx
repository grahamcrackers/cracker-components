import React, { FC } from 'react';

export const LayoutContent: FC = ({ children }) => {
    return <main className="mdl-layout__content">{children}</main>;
};

export default LayoutContent;
