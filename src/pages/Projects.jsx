import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="wrapper">
      <div className="content-wrapper projects">
        <div className="content-section fico">
          <h2>FICO</h2>
          <p>
            Led the redesign project for FICO a renowned analytics company, from
            frontend development perspective. Focused on enhancing user
            experience and streamlining business processes for their US clients.
          </p>
          {/* <a href="https://www.fico.com/">See more</a> */}
        </div>
        <div className="content-section menusso">
          <h2>Menusso</h2>
          <p>
            Contributed to the development of Menusso.com, an intuitive platform
            for restaurant owners to manage their menus seamlessly.
          </p>
          {/* <a href="https://www.menusso.com/">See more</a> */}
        </div>
        <div className="content-section squishmallows">
          <h2>Squishmallows</h2>
          <p>
            Developed a unique music player web game that was featured in the
            global McDonald's Happy Meal promotion, creating an engaging and fun
            experience for children.
          </p>
        </div>
        <div className="content-section adopt-me">
          <h2>Adopt Me</h2>
          <p>
            Created an interactive web game where users can play with virtual
            pets. This game was part of the McDonald's Happy Meal, offering an
            entertaining way to bond with digital pets.
          </p>
        </div>
        <div className="content-section multiversus">
          <h2>MultiVersus</h2>
          <p>
            Developed a quiz-style web game that was included in the McDonald's
            Happy Meal lineup, providing an educational and fun activity for
            kids to enjoy.
          </p>
        </div>
        <div className="content-section elementals">
          <h2>Elementals</h2>
          <p>
            Designed a video adventure web game that captivated young audiences.
            Featured in the McDonald's Happy Meal, it offered an immersive
            experience in a magical world.
          </p>
        </div>
        <div className="content-section captain-america">
          <h2>Captain America</h2>
          <p>
            Created an action-packed video adventure web game featuring Captain
            America, part of the McDonald's Happy Meal promotion. It combined
            engaging gameplay with an iconic superhero experience.
          </p>
        </div>
        <div className="content-section jurassic-world">
          <h2>Jurassic World - Chaos Theory</h2>
          <p>
            Developed an AR / VR web experience allowing users to interact with
            lifelike dinosaurs. This innovative project was featured in the
            McDonald's Happy Meal, offering a thrilling adventure.
          </p>
        </div>
        <div className="content-section asfalysis">
          <h2>Asfalysis - In Progress</h2>
          <p>
            Currently developing a website for a Swiss insurance company. The
            site aims to provide comprehensive information about insurance
            services and offerings in a secure and user-friendly manner.
          </p>
        </div>

        <div className="content-section fama">
          <h2>FAMA - In Progress</h2>
          <p>
            Developing a professional website for a video production company,
            aiming to showcase their portfolio and services through a modern,
            visually appealing design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
