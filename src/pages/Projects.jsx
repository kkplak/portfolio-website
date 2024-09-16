import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return <div className="wrapper"></div>;
};

export default Projects;
