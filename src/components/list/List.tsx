import React, { FC } from 'react';
import './list.scss';

export const List: FC = ({ ...props }) => {
    return <ul className="mdl-list" {...props} />;
};

export default List;
