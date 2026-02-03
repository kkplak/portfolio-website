import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SketchPicker } from "react-color"; // Import the color picker

const Playground: React.FC<{
  colorPalettes: any[];
  paletteIndex: number;
  setPaletteIndex: (index: number) => void;
}> = ({ colorPalettes, paletteIndex, setPaletteIndex }) => {
  const { t } = useTranslation();
  const [newColor, setNewColor] = useState<string>("#ffffff"); // Start with a default color

  const handlePaletteChange = (index: number) => {
    setPaletteIndex(index); // Directly set the new palette
  };

  const handleColorChange = (color: any) => {
    setNewColor(color.hex);
  };

  const addNewColorToPalette = () => {
    if (newColor && paletteIndex >= 0) {
      // Convert hex color to RGB
      const rgb = hexToRgb(newColor);
      if (rgb) {
        const newColorArray = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
        colorPalettes[paletteIndex].push(newColorArray);
        setNewColor("#ffffff");
      }
    }
  };

  // Helper function to convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  return (
    <div className="text-container playground">
      <div>
        <h2>{t("Select Color Palette")}</h2>
        <div className="playground-wrapper">
          {colorPalettes.map((palette, index) => (
            <div
              className="color-wrapper"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handlePaletteChange(index)}
            >
              {palette.map((color: any, colorIndex: any) => (
                <div
                  key={colorIndex}
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: `rgb(${color[0] * 255}, ${
                      color[1] * 255
                    }, ${color[2] * 255})`,
                    marginBottom: "5px",
                    borderRadius: "5px",
                    transition: "background-color 0.5s ease",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playground;
