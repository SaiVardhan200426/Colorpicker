import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './cp.css';

const ColorPicker = () => {
 const [color, setColor] = useState('#000000');

 const handleChange = (newColor) => {
    setColor(newColor.hex);
 };

 return (
    <div className="color-picker">
      <SketchPicker color={color} onChange={handleChange} />
      <p>Selected Color: {color}</p>
    </div>
 );
};

export default ColorPicker;

