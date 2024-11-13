// Simplicity.js
import React from "react";

const Simplicity = ({ changeContent }) => {
  return (
    <div className="simplicity-page">
      <button onClick={() => changeContent("goals")} className="back-button">
        Go Back
      </button>
      <h1>Simplicity & Functionality</h1>
      <h2>Crafting Intuitive Experiences</h2>
      <p>
        In the digital age, simplicity is key to capturing and retaining user
        attention. A clean and straightforward design helps users navigate your
        website effortlessly.
      </p>
      <p>
        By eliminating unnecessary clutter, we allow the core message to shine
        through. Simplicity in design leads to clarity in communication,
        ensuring that users understand your value proposition quickly.
      </p>
      <img
        src="https://via.placeholder.com/800x400.png?text=Clean+Design"
        alt="Clean Design"
      />
      <p>
        Functionality complements simplicity by providing users with the tools
        they need to achieve their goals. Every feature should serve a purpose
        and enhance the user experience.
      </p>
      <p>
        Combining simplicity with functionality results in a harmonious user
        interface that is both aesthetically pleasing and highly effective.
      </p>
      <img
        src="https://via.placeholder.com/800x400.png?text=User-Friendly+Interface"
        alt="User-Friendly Interface"
      />
      <img
        src="https://via.placeholder.com/800x400.png?text=Effortless+Navigation"
        alt="Effortless Navigation"
      />
    </div>
  );
};

export default Simplicity;
