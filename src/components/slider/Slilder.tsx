import React, { FC } from 'react';
import classnames from 'classnames';
import './slider.scss';

export interface SliderProps {
    hasWidth: string;
}

export const Slider: FC<SliderProps> = ({ hasWidth = '300px', ...props }) => {
    const classes = classnames('mdl-slider mdl-js-slider');
    return (
        <p style={{ width: hasWidth }}>
            <input type="range" className={classes} {...props} />
        </p>
    );
};

export default Slider;
