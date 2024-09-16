import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="text-container home">
        <div>
          <a href="www.linkedin.com/kkplak">Linkedin</a>
        </div>
        <div>
          <a href="www.github.com/kkplak">GitHub</a>
        </div>
        <div>
          <a href="mailto:info@codeline.com">Mail</a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
