import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Info = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    // Scroll to the top of the content-wrapper when the component mounts
    document.querySelector(".content-wrapper").scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper info">
      <div className="content-wrapper">
        <div className="content-section">
          <h2>Simplicity & Functionality</h2>
          <p>
            I believe in creating websites that are both simple and highly
            functional, ensuring a seamless user experience.
          </p>
        </div>
        <div className="content-section">
          <h2>Accessibility First</h2>
          <p>
            Accessibility (a11y) is at the core of my work. I design websites
            that are inclusive and user-friendly for everyone.
          </p>
        </div>
        <div className="content-section">
          <h2>Performance Optimization</h2>
          <p>
            Speed is crucial in the digital world. I ensure that websites are
            optimized for fast loading times and smooth interactions.
          </p>
        </div>
        <div className="content-section">
          <h2>Innovation & Creativity</h2>
          <p>
            While focusing on your needs, I love to infuse creativity into
            projects, occasionally incorporating unique and innovative elements
            to make your website stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
