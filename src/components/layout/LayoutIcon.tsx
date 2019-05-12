import React, { FC } from 'react';

interface Props {
    type: string;
    filled?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    twoTone?: boolean;
    sharp?: boolean;
}

/**
 * Layout Icon
 * @param icon The icon that will be displayed
 */
export const LayoutIcon: FC<Props> = ({ type, children }) => {
    return <i className="material-icons">{type.toLowerCase() || children}</i>;
};

export default LayoutIcon;
