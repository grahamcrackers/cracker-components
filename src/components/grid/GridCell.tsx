import React, { FC } from 'react';
import classnames from 'classnames';

export interface IGridCellProps {
    /**
     * Sets the column size for the cell to N
     * N is 1-12 inclusive, defaults to 4
     * */
    hasSize?: number;
    hasOffset?: number;
    hasOrder?: number;
    desktop?: IViewPortOptions;
    tablet?: IViewPortOptions;
    phone?: IViewPortOptions;
    /** @param align default is 'stretch' */
    hasAlignment?: 'stretch' | 'top' | 'middle' | 'bottom';
}

export interface IViewPortOptions {
    hasSize?: number;
    hasOffset?: number;
    hasOrder?: number;
    isHidden?: boolean;
}

const defaultOptions: IViewPortOptions = {
    hasSize: undefined,
    hasOffset: undefined,
    hasOrder: undefined,
    isHidden: false,
};

/**
 * MDL Grid
 */
export const GridCell: FC<IGridCellProps> = ({
    hasSize,
    hasOffset,
    hasOrder,
    hasAlignment,
    desktop = defaultOptions,
    tablet = defaultOptions,
    phone = defaultOptions,
    children,
}) => {
    const classes = classnames('mdl-cell', {
        [`mdl-cell--${hasSize}-col`]: hasSize,
        [`mdl-cell--${hasOffset}-offset`]: hasOffset,
        [`mdl-cell--order-${hasOrder}`]: hasOrder,
        [`mdl-cell--${hasAlignment}`]: hasAlignment,
        [`mdl-cell--${desktop.hasSize}-col-desktop`]: desktop.hasSize,
        [`mdl-cell--${tablet.hasSize}-col-tablet`]: tablet.hasSize,
        [`mdl-cell--${phone.hasSize}-col-phone`]: phone.hasSize,
        [`mdl-cell--${desktop.hasOffset}-offset-desktop`]: desktop.hasOffset,
        [`mdl-cell--${tablet.hasOffset}-offset-tablet`]: tablet.hasOffset,
        [`mdl-cell--${phone.hasOffset}-offset-phone`]: phone.hasOffset,
        [`mdl-cell--order-${desktop.hasOrder}-desktop`]: desktop.hasOrder,
        [`mdl-cell--order-${tablet.hasOrder}-tablet`]: tablet.hasOrder,
        [`mdl-cell--order-${phone.hasOrder}-phone`]: phone.hasOrder,
        'mdl-cell--hide-desktop': desktop.isHidden,
        'mdl-cell--hide-tablet': tablet.isHidden,
        'mdl-cell--hide-phone': phone.isHidden,
    });
    return <div className={classes}>{children}</div>;
};

export default GridCell;
