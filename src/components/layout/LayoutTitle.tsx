import React, { FC } from 'react';

export interface LayoutTitleProps {
    text?: string;
}

export const LayoutTitle: FC<LayoutTitleProps> = ({ text, children }) => {
    return <span className="mdl-layout-title">{text || children}</span>;
};

export default LayoutTitle;
