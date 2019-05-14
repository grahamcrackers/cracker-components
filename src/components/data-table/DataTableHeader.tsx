// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, ReactChild } from 'react';
import classnames from 'classnames';

export interface DataTableHeaderProps {
    isNonNumeric?: boolean;
    isSorted?: 'ascending' | 'descending';
    children?: ReactChild;
}

/**
 * MDL Data Table Header
 */
export const DataTableHeader: FC<DataTableHeaderProps> = ({ isNonNumeric = true, isSorted, children }) => {
    const classes = classnames({
        'mdl-data-table__cell--non-numeric': isNonNumeric,
        [`mdl-data-table__header--sorted-${isSorted}`]: isSorted,
    });
    return <th className={classes}>{children}</th>;
};

export default DataTableHeader;
