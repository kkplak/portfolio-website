import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as FlagEnglish } from "../LanguageSwitcher/flag-english.svg";
import { ReactComponent as FlagGerman } from "../LanguageSwitcher/flag-german.svg";
import { ReactComponent as FlagPolish } from "../LanguageSwitcher/flag-polish.svg";
import { ReactComponent as FlagGreek } from "../LanguageSwitcher/flag-greek.svg";
import "./LanguageSwitcher.css"; // Import the CSS file

const flags = {
  en: <FlagEnglish />,
  pl: <FlagPolish />,
  de: <FlagGerman />,
  el: <FlagGreek />,
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").slice(2).join("/");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    navigate(`/${lang}/${currentPath}`);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div>
      {!isMobile ? (
        <div className='language-switcher'>
          <FlagEnglish
            onClick={() => handleLanguageChange("en")}
            className={`language-icon ${i18n.language === "en" ? "active" : ""}`}
          />
          <FlagPolish
            onClick={() => handleLanguageChange("pl")}
            className={`language-icon ${i18n.language === "pl" ? "active" : ""}`}
          />
          <FlagGerman
            onClick={() => handleLanguageChange("de")}
            className={`language-icon ${i18n.language === "de" ? "active" : ""}`}
          />
          <FlagGreek
            onClick={() => handleLanguageChange("el")}
            className={`language-icon ${i18n.language === "el" ? "active" : ""}`}
          />
        </div>
      ) : (
        <div className={`language-switcher-dropdown ${dropdownOpen ? 'open' : ''}`}>
          <div className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {flags[i18n.language]}
          </div>
          <div className="dropdown-content">
            {Object.entries(flags).map(([lang, FlagComponent]) => (
              <div key={lang} onClick={() => handleLanguageChange(lang)}>
                {FlagComponent}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
