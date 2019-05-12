import React, { FC } from 'react';
import classnames from 'classnames';

export interface IGridProps {
    noSpacing?: boolean;
}

/**
 * MDL Grid
 */
export const Grid: FC<IGridProps> = ({ noSpacing, children }) => {
    const classes = classnames('mdl-grid', {
        'mdl-grid--no-spacing': noSpacing,
    });
    return <div className={classes}>{children}</div>;
};

export default Grid;
