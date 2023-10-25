import React, { useState } from "react";
import "./CP.css";

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Pick a color</button>
      {isOpen && (
        <div className="color-picker-list">
          {colors.map((color) => (
            <div
              key={color}
              className="color-picker-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      )}
      <div className="selected-color">
        {selectedColor && (
          <div
            style={{ backgroundColor: selectedColor }}
            className="selected-color-square"
          />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
