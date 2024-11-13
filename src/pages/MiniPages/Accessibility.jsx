// Accessibility.js
import React from "react";

const Accessibility = ({ changeContent }) => {
  return (
    <div className="accessibility-page">
      <button onClick={() => changeContent("goals")} className="back-button">
        Go Back
      </button>
      <h1>Accessibility: Building a Web for Everyone</h1>

      <h2>Understanding Web Accessibility</h2>
      <p>
        Web accessibility is about making the internet usable for everyone,
        regardless of physical, cognitive, or technological limitations. It's
        ensuring that all individuals, including those with disabilities, can
        perceive, understand, navigate, and interact with websites effectively.
      </p>
      <p>
        Think about how often we rely on the internet—for information,
        communication, shopping, and more. For many people with disabilities,
        inaccessible websites create barriers that can feel isolating and
        frustrating. By prioritizing accessibility, we can remove these barriers
        and make the web a more inclusive place.
      </p>

      <img
        src="https://via.placeholder.com/800x400.png?text=Inclusive+Web"
        alt="Inclusive Web"
      />

      <h2>Why Accessibility Matters</h2>
      <p>
        Accessibility is more than a technical requirement; it's a fundamental
        human right. When websites are accessible, they empower individuals with
        disabilities to live more independent and fulfilling lives. Consider the
        words of Emily, a user with visual impairments:
      </p>
      <blockquote>
        "When a website is accessible, it's like the world opens up to me. I can
        read articles, shop online, and connect with others without needing
        assistance. It makes me feel included and valued."
      </blockquote>
      <p>
        By making websites accessible, we not only comply with legal standards
        but also touch lives in meaningful ways. It's about empathy and
        recognizing the diverse needs of our global community.
      </p>

      <h2>How Accessibility Transforms Lives</h2>
      <p>Accessible websites enable people with disabilities to:</p>
      <ul>
        <li>
          <strong>Access Information:</strong> Obtain news, education, and
          resources independently.
        </li>
        <li>
          <strong>Communicate:</strong> Connect with friends, family, and
          communities without barriers.
        </li>
        <li>
          <strong>Participate in Commerce:</strong> Shop online, manage
          finances, and access services conveniently.
        </li>
      </ul>
      <p>
        Mark, who uses a wheelchair and has limited hand mobility, shares his
        experience:
      </p>
      <blockquote>
        "Websites that are easy to navigate with voice commands or eye tracking
        technology make a huge difference in my daily life. I can do things on
        my own schedule without relying on others."
      </blockquote>

      <img
        src="https://via.placeholder.com/800x400.png?text=Empowering+Users"
        alt="Empowering Users"
      />

      <h2>Eye Tracking Technology: A New Frontier</h2>
      <p>
        The future is here, and it's transforming accessibility. Eye tracking
        technology, now available on the latest devices, allows users to control
        interfaces using only their eyes. This innovation is especially
        impactful for individuals with motor impairments.
      </p>
      <p>Sarah, who has amyotrophic lateral sclerosis (ALS), explains:</p>
      <blockquote>
        "Eye tracking technology has given me a sense of freedom I thought I'd
        lost. Navigating websites with my eyes lets me stay connected with the
        world. It's more than convenience; it's a lifeline."
      </blockquote>
      <p>
        By building websites that support eye tracking and other assistive
        technologies, we make them more accessible and user-friendly for
        everyone.
      </p>

      <img
        src="https://via.placeholder.com/800x400.png?text=Eye+Tracking+Technology"
        alt="Eye Tracking Technology"
      />

      <h2>How We Can Make a Difference</h2>
      <p>
        Accessibility doesn't happen by accident; it requires intentional design
        and development. Here are ways we can create more accessible websites:
      </p>
      <ul>
        <li>
          <strong>Use Semantic HTML:</strong> Proper tags and structures make it
          easier for assistive technologies to interpret content.
        </li>
        <li>
          <strong>Provide Alternative Text:</strong> Descriptive alt text for
          images ensures that users with visual impairments understand visual
          content.
        </li>
        <li>
          <strong>Ensure Keyboard Navigation:</strong> Designing interactive
          elements that can be accessed via keyboard helps users who cannot use
          a mouse.
        </li>
        <li>
          <strong>Optimize for Assistive Technologies:</strong> Supporting eye
          tracking, screen readers, and voice controls enhances usability.
        </li>
      </ul>
      <p>
        By integrating these practices, we not only comply with standards but
        also create a better experience for all users.
      </p>

      <h2>Why Act Now?</h2>
      <p>
        The importance of accessibility cannot be overstated. As technology
        advances, the gap between accessible and inaccessible websites widens.
        Users are expecting more, and rightly so. By embracing accessibility, we
        demonstrate compassion, leadership, and a commitment to inclusivity.
      </p>
      <p>As Michael, a disability advocate, puts it:</p>
      <blockquote>
        "Accessibility is not just about disability; it's about possibility.
        It's about unlocking potential and allowing everyone to contribute to
        society fully."
      </blockquote>

      <img
        src="https://via.placeholder.com/800x400.png?text=Inclusive+Future"
        alt="Inclusive Future"
      />

      <h2>Join Us in Creating an Inclusive Web</h2>
      <p>
        I'm dedicated to making the web a place where everyone feels welcome and
        empowered. By focusing on accessibility, we can build websites that are
        not only functional but also compassionate and understanding.
      </p>
      <p>
        Whether you're looking to update an existing site or create something
        new, I'm here to help you navigate the journey toward full
        accessibility. Together, we can make a real difference in people's
        lives.
      </p>
      <p>
        Let's work together to build a web that reflects the diversity and
        richness of humanity. Because when everyone can participate, we all
        benefit.
      </p>
    </div>
  );
};

export default Accessibility;
