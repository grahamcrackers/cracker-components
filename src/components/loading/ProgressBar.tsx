import React, { FC } from 'react';
import classnames from 'classnames';
import './progress.scss';

export interface ProgressBarProps {
    id: string;
    isIndeterminate?: boolean;
}

/**
 * MDL ProgressBar
 */
export const ProgressBar: FC<ProgressBarProps> = ({ id, isIndeterminate = false, ...props }) => {
    const classes = classnames('mdl-progress', 'mdl-js-progress', {
        'mdl-progress--indeterminate': isIndeterminate,
    });
    return <div id={id} className={classes} {...props} />;
};

export default ProgressBar;
