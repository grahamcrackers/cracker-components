import React, { FC } from 'react';
import classnames from 'classnames';

export interface LayoutHeaderProps {
    isTransparent?: boolean;
    isScrollable?: boolean;
    isSeamed?: boolean;
    isWaterfall?: boolean;
    waterfallHideTop?: boolean;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
    isTransparent,
    isScrollable,
    isWaterfall,
    waterfallHideTop,
    children,
}) => {
    const classes = classnames('mdl-layout__header', {
        'mdl-layout__header--transparent': isTransparent,
        'mdl-layout__header--scroll': isScrollable,
        'mdl-layout__header--waterfall': isWaterfall,
        'mdl-layout__header--waterfall-hide-top': isWaterfall && waterfallHideTop,
    });
    return <header className={classes}>{children}</header>;
};

export default LayoutHeader;
