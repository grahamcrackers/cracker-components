// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, ReactChild, createElement } from 'react';
import classnames from 'classnames';

export interface DataTableCellProps {
    isNonNumeric?: boolean;
    children?: ReactChild;
}

/**
 * MDL Data Table Cell
 */
export const DataTableCell: FC<DataTableCellProps> = ({ isNonNumeric = true, children }) => {
    const classes = classnames({
        'mdl-data-table__cell--non-numeric': isNonNumeric,
    });
    return <td className={classes}>{children}</td>;
};

export default DataTableCell;
