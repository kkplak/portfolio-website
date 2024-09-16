import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import OrganicBackground from "../src/components/OrganicBackground/OrganicBackground";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Playground from "./pages/Playgroud";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";

import "./App.css";

const resources = {
  en: { translation: translationEN },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const App = () => {
  // Define multiple color palettes
  const colorPalettes = [
    [
      [0.5, 0.31, 0.16], // Terracotta
      [0.64, 0.44, 0.21], // Umber
      [0.58, 0.44, 0.09], // Ochre
      [0.45, 0.55, 0.35], // Olive
      [0.69, 0.55, 0.41], // Sandstone
      [0.8, 0.7, 0.6], // Linen
      [0.9, 0.85, 0.78], // Parchment
    ],
    // Palette 1
    [
      [0.42, 0.3, 0.22], // Kogecha (Burnt Tea)
      [0.55, 0.4, 0.32], // Lighter Brown
      [0.61, 0.18, 0.13], // Aka (Deep Red)
      [0.33, 0.42, 0.18], // Midori (Green)
      [0.64, 0.37, 0.28], // Kuri (Chestnut)
      [0.76, 0.7, 0.5], // Suna (Sand)
      [0.85, 0.75, 0.6], // Beige
    ],
    // Palette 2

    // Palette 45: Deep Purples with Lime Green
    [
      [0.2, 0.15, 0.25], // Eggplant
      [0.25, 0.2, 0.3], // Grape
      [0.3, 0.25, 0.35], // Dark Lavender
      [0.18, 0.12, 0.22], // Plum
      [0.35, 0.5, 0.2], // Lime Green
      [0.22, 0.18, 0.28], // Mulberry
      [0.27, 0.23, 0.33], // Royal Purple
    ],

    [
      [0.18, 0.18, 0.18], // Charcoal
      [0.25, 0.25, 0.25], // Graphite
      [0.3, 0.3, 0.3], // Iron
      [0.15, 0.15, 0.15], // Black Steel
      [0.2, 0.4, 0.6], // Electric Blue
      [0.22, 0.22, 0.22], // Smoky
      [0.28, 0.28, 0.28], // Slate
    ],

    // Palette 3
    [
      [0.96, 0.76, 0.79], // Light Pink
      [0.95, 0.64, 0.76], // Pink Blush
      [0.93, 0.48, 0.62], // Rose Pink
      [0.89, 0.28, 0.56], // Deep Pink
      [0.76, 0.12, 0.42], // Raspberry
      [0.65, 0.1, 0.36], // Cherry Blossom
      [0.85, 0.75, 0.8], // Lavender Pink
    ],

    // Palette 4
    [
      [0.1, 0.3, 0.2], // Dark Green
      [0.2, 0.4, 0.3], // Forest Green
      [0.3, 0.5, 0.4], // Moss Green
      [0.4, 0.6, 0.5], // Sage
      [0.5, 0.7, 0.6], // Mint Green
      [0.6, 0.8, 0.7], // Light Green
      [0.7, 0.9, 0.8], // Seafoam
    ],

    // Palette 5
    [
      [0.05, 0.2, 0.3], // Deep Sea Blue
      [0.1, 0.3, 0.4], // Ocean
      [0.2, 0.4, 0.5], // Teal
      [0.3, 0.5, 0.6], // Aquamarine
      [0.4, 0.6, 0.7], // Sky Blue
      [0.6, 0.8, 0.9], // Light Blue
      [0.8, 0.9, 0.95], // Ice Blue
    ],

    // Palette 6
    [
      [0.25, 0.2, 0.1], // Charcoal
      [0.35, 0.3, 0.2], // Soil
      [0.45, 0.4, 0.3], // Earth
      [0.55, 0.5, 0.4], // Sandstone
      [0.65, 0.6, 0.5], // Clay
      [0.75, 0.7, 0.6], // Ash
      [0.85, 0.8, 0.7], // Limestone
    ],
    [
      [0.0, 0.0, 0.0], // Black
      [0.15, 0.15, 0.15], // Very Dark Gray
      [0.3, 0.3, 0.3], // Dark Gray
      [0.5, 0.5, 0.5], // Gray
      [0.7, 0.7, 0.7], // Light Gray
      [0.85, 0.85, 0.85], // Very Light Gray
      [1.0, 1.0, 1.0], // White
    ],
    [
      [0.1, 0.1, 0.1], // Charcoal
      [0.2, 0.18, 0.15], // Dark Coffee
      [0.3, 0.28, 0.25], // Smoky Brown
      [0.4, 0.38, 0.35], // Warm Gray
      [0.5, 0.48, 0.45], // Foggy Gray
      [0.6, 0.58, 0.55], // Stone Gray
      [0.7, 0.68, 0.65], // Soft Clay
    ],

    // Palette 9
    [
      [0.05, 0.1, 0.2], // Midnight Blue
      [0.1, 0.15, 0.3], // Deep Sea
      [0.15, 0.2, 0.4], // Ocean Depth
      [0.2, 0.25, 0.5], // Twilight
      [0.3, 0.35, 0.6], // Moonlight
      [0.4, 0.45, 0.7], // Blue Steel
      [0.5, 0.55, 0.8], // Misty Blue
    ],

    // Palette 10
    [
      [0.05, 0.1, 0.05], // Deep Forest
      [0.1, 0.15, 0.1], // Dark Moss
      [0.15, 0.2, 0.15], // Pine Green
      [0.2, 0.3, 0.2], // Forest Fern
      [0.3, 0.4, 0.3], // Leafy Canopy
      [0.4, 0.5, 0.4], // Woodland
      [0.5, 0.6, 0.5], // Sage Mist
    ],
    [
      [0.22, 0.28, 0.31], // Deep Teal
      [0.29, 0.35, 0.38], // Steel Blue
      [0.36, 0.44, 0.46], // Slate Gray
      [0.42, 0.48, 0.5], // Stormy Blue
      [0.27, 0.3, 0.32], // Charcoal
      [0.34, 0.37, 0.39], // Dusty Blue
      [0.31, 0.34, 0.36], // Deep Sea
    ],

    // Palette 12
    [
      [0.37, 0.28, 0.36], // Plum
      [0.48, 0.36, 0.45], // Deep Rose
      [0.52, 0.4, 0.39], // Smoky Mauve
      [0.46, 0.34, 0.36], // Berry
      [0.32, 0.24, 0.28], // Deep Wine
      [0.42, 0.32, 0.33], // Maroon
      [0.44, 0.3, 0.34], // Aubergine
    ],

    // Palette 14: Autumn Twilight
    [
      [0.38, 0.26, 0.14], // Burnt Orange
      [0.45, 0.34, 0.22], // Chestnut Brown
      [0.29, 0.36, 0.25], // Forest Green
      [0.34, 0.24, 0.22], // Deep Terracotta
      [0.32, 0.29, 0.2], // Olive Drab
      [0.42, 0.27, 0.3], // Burgundy
      [0.3, 0.32, 0.28], // Slate Green
    ],

    // Palette 22: Industrial Chic
    [
      [0.22, 0.22, 0.26], // Charcoal Gray
      [0.28, 0.28, 0.34], // Steel Blue
      [0.34, 0.2, 0.22], // Brick Red
      [0.3, 0.34, 0.28], // Olive Green
      [0.24, 0.28, 0.32], // Slate
      [0.32, 0.3, 0.25], // Bronze
      [0.25, 0.3, 0.34], // Iron
    ],

    // Palette 24: Vintage Midnight
    [
      [0.18, 0.18, 0.28], // Midnight Blue
      [0.28, 0.2, 0.32], // Purple Haze
      [0.24, 0.28, 0.34], // Stormy Gray
      [0.32, 0.22, 0.25], // Bordeaux
      [0.26, 0.24, 0.3], // Smoky Violet
      [0.34, 0.3, 0.22], // Antique Gold
      [0.22, 0.3, 0.28], // Forest Green
    ],
    // Palette 15: Mystic Garden
    [
      [0.22, 0.31, 0.28], // Dark Teal
      [0.35, 0.26, 0.4], // Deep Purple
      [0.42, 0.33, 0.2], // Olive Brown
      [0.18, 0.3, 0.25], // Forest Green
      [0.3, 0.38, 0.42], // Slate Blue
      [0.28, 0.18, 0.3], // Berry Purple
      [0.2, 0.35, 0.32], // Pine Green
    ],

    // Palette 17: Urban Jungle
    [
      [0.28, 0.34, 0.25], // Army Green
      [0.4, 0.29, 0.36], // Plum
      [0.32, 0.22, 0.28], // Dark Cherry
      [0.2, 0.3, 0.34], // Teal Blue
      [0.35, 0.32, 0.22], // Olive Drab
      [0.44, 0.38, 0.32], // Warm Gray
      [0.24, 0.26, 0.34], // Slate Gray
    ],

    [
      [0.35, 0.1, 0.18], // Deep Red
      [0.42, 0.15, 0.24], // Burgundy
      [0.3, 0.08, 0.14], // Maroon
      [0.48, 0.18, 0.26], // Crimson
      [0.38, 0.12, 0.22], // Dark Rose
      [0.44, 0.16, 0.25], // Wine
      [0.28, 0.07, 0.13], // Dark Ruby
    ],

    // Palette 26: Aurora Borealis
    [
      [0.15, 0.25, 0.45], // Deep Indigo
      [0.28, 0.34, 0.48], // Icy Blue
      [0.18, 0.38, 0.35], // Emerald Teal
      [0.25, 0.3, 0.5], // Midnight Purple
      [0.2, 0.28, 0.4], // Ocean Depths
      [0.3, 0.2, 0.38], // Nebula Violet
      [0.22, 0.32, 0.45], // Glacier Blue
    ],

    // Palette 27: Industrial Neon
    [
      [0.2, 0.3, 0.3], // Neon Green
      [0.3, 0.1, 0.25], // Electric Pink
      [0.28, 0.38, 0.18], // Acid Green
      [0.22, 0.15, 0.4], // Ultraviolet
      [0.26, 0.36, 0.22], // Toxic Green
      [0.32, 0.18, 0.3], // Hot Magenta
      [0.24, 0.28, 0.45], // Neon Blue
    ],

    // Palette 28: Nocturnal Flame
    [
      [0.38, 0.18, 0.05], // Dark Ember
      [0.28, 0.08, 0.12], // Burning Crimson
      [0.3, 0.15, 0.28], // Smoky Violet
      [0.35, 0.12, 0.2], // Ashen Red
      [0.32, 0.28, 0.18], // Charred Olive
      [0.2, 0.1, 0.3], // Midnight Violet
      [0.26, 0.2, 0.18], // Coal Black
    ],

    // Palette 29: Dark Harvest
    [
      [0.25, 0.18, 0.05], // Burnt Umber
      [0.2, 0.28, 0.22], // Deep Moss
      [0.35, 0.2, 0.1], // Roasted Pumpkin
      [0.28, 0.22, 0.08], // Golden Maize
      [0.38, 0.28, 0.14], // Spiced Honey
      [0.18, 0.12, 0.25], // Grape Vine
      [0.3, 0.25, 0.2], // Caramel Brown
    ],
    // Palette 30: Deep Emeralds
    [
      [0.05, 0.2, 0.15], // Dark Emerald
      [0.1, 0.3, 0.25], // Forest Green
      [0.08, 0.25, 0.2], // Pine Green
      [0.12, 0.35, 0.28], // Jade
      [0.04, 0.18, 0.12], // Midnight Green
      [0.09, 0.28, 0.22], // Teal Green
      [0.07, 0.22, 0.18], // Bottle Green
    ],

    // Palette 31: Sapphire Night
    [
      [0.02, 0.08, 0.25], // Deep Sapphire
      [0.08, 0.1, 0.35], // Midnight Blue
      [0.04, 0.12, 0.28], // Navy
      [0.1, 0.2, 0.4], // Royal Blue
      [0.03, 0.07, 0.2], // Ocean Depth
      [0.06, 0.15, 0.3], // Dark Azure
      [0.05, 0.09, 0.22], // Midnight Indigo
    ],
    [
      [0.35, 0.25, 0.2], // Dark Cocoa
      [0.4, 0.3, 0.25], // Rich Brown
      [0.45, 0.35, 0.3], // Soft Walnut
      [0.3, 0.2, 0.15], // Deep Mahogany
      [0.2, 0.4, 0.3], // Emerald Green
      [0.38, 0.28, 0.23], // Dark Oak
      [0.42, 0.32, 0.28], // Charred Wood
    ],

    // Palette 42: Midnight Blues with Coral
    [
      [0.1, 0.15, 0.25], // Deep Navy
      [0.15, 0.2, 0.3], // Midnight Blue
      [0.2, 0.25, 0.35], // Slate Blue
      [0.08, 0.12, 0.2], // Dark Indigo
      [0.6, 0.35, 0.3], // Coral
      [0.18, 0.22, 0.32], // Ocean Blue
      [0.12, 0.18, 0.28], // Abyss Blue
    ],

    // Palette 43: Forest Greens with Amber
    [
      [0.18, 0.3, 0.2], // Forest Green
      [0.22, 0.35, 0.25], // Moss
      [0.26, 0.4, 0.3], // Olive
      [0.15, 0.28, 0.18], // Dark Fern
      [0.5, 0.35, 0.2], // Amber
      [0.2, 0.33, 0.23], // Pine Green
      [0.17, 0.25, 0.19], // Cedar
    ],

    // Palette 44: Charcoal with Electric Blue

    // Palette 32: Amethyst Veil
    [
      [0.2, 0.05, 0.25], // Dark Amethyst
      [0.28, 0.1, 0.35], // Deep Violet
      [0.22, 0.08, 0.3], // Grape Purple
      [0.18, 0.05, 0.22], // Eggplant
      [0.25, 0.12, 0.38], // Royal Purple
      [0.3, 0.14, 0.42], // Dark Lavender
      [0.24, 0.09, 0.32], // Plum
    ],
    [
      [0.5, 0.5, 0.5], // Dark Gray Frost
      [0.45, 0.45, 0.45], // Charcoal Gray
      [0.55, 0.55, 0.55], // Weathered White
      [0.4, 0.4, 0.4], // Dusty White
      [0.35, 0.45, 0.55], // Icy River Blue
      [0.6, 0.6, 0.6], // Stone White
      [0.48, 0.48, 0.48], // Ashen Gray
    ],
    // Palette 33: Smoky Citrine
    [
      [0.2, 0.15, 0.05], // Smoky Citrine
      [0.28, 0.2, 0.1], // Burnt Amber
      [0.18, 0.12, 0.04], // Dark Honey
      [0.25, 0.18, 0.08], // Antique Gold
      [0.22, 0.16, 0.07], // Brass
      [0.3, 0.22, 0.12], // Bronze
      [0.24, 0.18, 0.1], // Golden Brown
    ],

    // Palette 34: Obsidian Depths
    [
      [0.05, 0.05, 0.1], // Deep Obsidian
      [0.1, 0.1, 0.18], // Charcoal Black
      [0.08, 0.08, 0.16], // Midnight Black
      [0.12, 0.12, 0.22], // Gunmetal Gray
      [0.04, 0.04, 0.08], // Jet Black
      [0.09, 0.09, 0.2], // Ash Gray
      [0.07, 0.07, 0.14], // Onyx
    ],
  ];

  const [activeComponent, setActiveComponent] = useState("home"); // Track which component to show
  const [fadeState, setFadeState] = useState("fade-in");
  const [paletteIndex, setPaletteIndex] = useState(0);
  const changeStyle = () => {
    let newIndex = Math.floor(Math.random() * colorPalettes.length);
    while (newIndex === paletteIndex && colorPalettes.length > 1) {
      newIndex = Math.floor(Math.random() * colorPalettes.length);
    }
    setPaletteIndex(newIndex);
  };
  // useEffect(() => {
  //   changeStyle();
  // }, []);

  const changeContent = (component) => {
    setFadeState("fade-out");
    setTimeout(() => {
      setActiveComponent(component);
      setFadeState("fade-in");
    }, 500); // Match the duration with the fade-out animation
  };

  // Render the active component based on state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "goals":
        return <Info />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "playground":
        return (
          <Playground
            colorPalettes={colorPalettes}
            paletteIndex={paletteIndex} // Pass paletteIndex
            setPaletteIndex={setPaletteIndex}
          />
        );
      default:
        return <Home />;
    }
  };

  return (
    <I18nextProvider i18n={i18next}>
      <div className="App">
        <div style={{ position: "relative" }}>
          {/* Canvas */}
          <Canvas
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
            camera={{ position: [0, 0, 5], fov: 50 }}
          >
            <OrganicBackground palette={colorPalettes[paletteIndex]} />
          </Canvas>

          <nav
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {["Home", "Goals", "Projects", "Contact", "Playground"].map(
              (text) => {
                const componentName = text.toLowerCase().replace(" ", "");
                const isActive = activeComponent === componentName;

                return (
                  <button
                    key={text}
                    onClick={() => changeContent(componentName)}
                    style={{
                      backgroundColor: isActive
                        ? "rgba(255, 255, 255, 0.1)" // Active state color
                        : "transparent",
                      color: "#ffffff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s, transform 0.3s", // Smooth hover effect
                      fontSize: "1rem",
                      fontFamily: "Josefin Sans, sans-serif",
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.target.style.backgroundColor =
                          "rgba(255, 255, 255, 0.2)"; // Lighter on hover
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.target.style.backgroundColor = "transparent"; // Revert on mouse out for non-active items
                      }
                    }}
                  >
                    {text}
                  </button>
                );
              }
            )}
          </nav>

          <h1
            style={{
              position: "fixed",
              top: "95.5%",
              left: "86%",
              transform: "translate(-50%, -50%)",
              color: "#ffffff",
              fontSize: "2rem",
              mixBlendMode: "overlay",
              pointerEvents: "auto", // Change to 'auto' to make the element clickable
              zIndex: 1,
              textAlign: "center",
              fontFamily: "Josefin Sans, sans-serif",
              cursor: "pointer", // Add cursor pointer to indicate it's clickable
            }}
            onClick={changeStyle}
          >
            codeline
          </h1>
        </div>
        <div className="container">
          <div className={fadeState}>
            {activeComponent === "playground" ? (
              <Playground
                colorPalettes={colorPalettes}
                setPaletteIndex={setPaletteIndex}
              />
            ) : (
              renderActiveComponent()
            )}
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default App;
