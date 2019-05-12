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
 * Material Design Icon
 * https://material.io/tools/icons/?style=baseline
 * @param icon The icon that will be displayed
 */
export const Icon: FC<Props> = ({ type, children }) => {
    return <i className="material-icons">{type.toLowerCase() || children}</i>;
};

export default Icon;
