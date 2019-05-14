import React, { FC } from 'react';
import classnames from 'classnames';
import 'material-design-lite/src/textfield/textfield';
import './textfield.scss';

export interface TextFieldInputProps {
    hasFloatingLabel?: boolean;
    isExpandable?: boolean;
    isInvalid?: boolean;
}

export const TextFieldInput: FC<TextFieldInputProps> = ({ hasFloatingLabel, isExpandable, isInvalid, ...props }) => {
    const classes = classnames('mdl-textfield', 'mdl-js-textfield', {
        'mdl-textfield--floating-label': hasFloatingLabel,
        'mdl-textfield--expandable': isExpandable,
        'is-invalid': isInvalid,
    });
    return <div className={classes} {...props} />;
};

export default TextFieldInput;
