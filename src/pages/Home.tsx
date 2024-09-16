// HomePage.jsx

import { Link, useParams } from "react-router-dom";

function Home() {
  const { lang } = useParams();

  return (
    <div className="wrapper">
      <div className="text-container home">
        <p>
          Hello, I'm a frontend developer with a love for great design and fun,
          interactive websites. In my day-to-day work, I collaborate with
          cross-functional teams to build websites and web games for renowned
          clients such as Marvel, Disney, Universal Studios, Warner Bros, and
          McDonald's.
        </p>
      </div>
    </div>
  );
}

export default Home;
