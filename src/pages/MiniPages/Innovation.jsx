// Innovation.js
import React from "react";

const Innovation = ({ changeContent }) => {
  return (
    <div className="innovation-page">
      <button onClick={() => changeContent("goals")} className="back-button">
        Go Back
      </button>
      <h1>Innovation & Creativity</h1>
      <h2>Pushing Boundaries Forward</h2>
      <p>
        Innovation drives progress and sets you apart from the competition.
        Embracing new technologies and creative solutions can elevate your
        online presence.
      </p>
      <p>
        We love integrating cutting-edge features that enhance functionality
        while maintaining a focus on user experience.
      </p>
      <img
        src="https://via.placeholder.com/800x400.png?text=Cutting-Edge+Tech"
        alt="Cutting-Edge Technology"
      />
      <p>
        Creativity in design captures attention and creates memorable
        interactions. We strive to deliver unique and engaging websites that
        resonate with users.
      </p>
      <p>
        Our innovative approach ensures your website is not just current but
        future-proof, adapting to the ever-evolving digital landscape.
      </p>
      <img
        src="https://via.placeholder.com/800x400.png?text=Creative+Solutions"
        alt="Creative Solutions"
      />
      <img
        src="https://via.placeholder.com/800x400.png?text=Future-Proof+Design"
        alt="Future-Proof Design"
      />
    </div>
  );
};

export default Innovation;
