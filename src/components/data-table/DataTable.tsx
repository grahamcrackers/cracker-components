import React, { FC, ReactChild } from 'react';
import classnames from 'classnames';
import './data-table';

export interface DataTableProps {
    isSelectable?: boolean;
    children?: ReactChild;
}

/**
 * MDL Data Table
 */
export const DataTable: FC<DataTableProps> = ({ isSelectable, children }) => {
    const classes = classnames('mdl-data-table', 'mdl-js-data-table', { 'mdl-data-table--selectable': isSelectable });
    return <table className={classes}>{children}</table>;
};

export default DataTable;
