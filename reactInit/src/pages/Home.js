import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <Link to="/experience">Experience</Link> |{" "}
        <Link to="/education">Education</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
