import React, { FC } from 'react';

export const SnackbarText: FC = ({ children }) => {
    return <div className="mdl-snackbar__text">{children}</div>;
};

export default SnackbarText;
