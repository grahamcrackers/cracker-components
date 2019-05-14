import React, { FC } from 'react';
import classnames from 'classnames';
import './textfield.scss';

export interface TextFieldProps {
    hasFloatingLabel?: boolean;
    isExpandable?: boolean;
    isInvalid?: boolean;
}

export const TextField: FC<TextFieldProps> = ({ hasFloatingLabel, isExpandable, isInvalid, ...props }) => {
    const classes = classnames('mdl-textfield', 'mdl-js-textfield', {
        'mdl-textfield--floating-label': hasFloatingLabel,
        'mdl-textfield--expandable': isExpandable,
        'is-invalid': isInvalid,
    });
    return <div className={classes} {...props} />;
};

export default TextField;
