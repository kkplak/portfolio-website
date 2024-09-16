import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="text-container home">
        <div className="contact-item">
          <a href="https://www.linkedin.com/kkplak">LinkedIn</a>
        </div>
        <div className="contact-item">
          <a href="https://www.github.com/kkplak">GitHub</a>
        </div>
        <div className="contact-item">
          <a href="mailto:info@codeline.com">Mail</a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
