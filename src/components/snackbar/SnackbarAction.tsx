import React, { FC } from 'react';

export const SnackbarAction: FC = ({ children }) => {
    return (
        <button type="button" className="mdl-snackbar__action">
            {children}
        </button>
    );
};

export default SnackbarAction;
