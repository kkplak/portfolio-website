// Performance.js
import React from "react";

const Performance = ({ changeContent }) => {
  return (
    <div className="performance-page">
      <button onClick={() => changeContent("goals")} className="back-button">
        Go Back
      </button>
      <h1>Performance Optimization</h1>
      <h2>Delivering Speed and Efficiency</h2>
      <p>
        Performance is a critical aspect of user satisfaction. Fast-loading
        websites keep users engaged and reduce bounce rates.
      </p>
      <p>
        By optimizing code, compressing images, and leveraging caching
        strategies, we can significantly improve load times and responsiveness.
      </p>
      <img
        src="https://via.placeholder.com/800x400.png?text=Speed+Matters"
        alt="Speed Matters"
      />
      <p>
        Efficient performance not only benefits users but also improves search
        engine rankings, as speed is a key factor in SEO algorithms.
      </p>
      <p>
        Our commitment to performance ensures that your website runs smoothly,
        providing a seamless experience across all devices.
      </p>
      <img
        src="https://via.placeholder.com/800x400.png?text=Optimized+Experience"
        alt="Optimized Experience"
      />
      <img
        src="https://via.placeholder.com/800x400.png?text=Happy+Users"
        alt="Happy Users"
      />
    </div>
  );
};

export default Performance;
