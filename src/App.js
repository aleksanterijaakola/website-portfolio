import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <>
      <div>
        <h1>About.</h1>
        <h2>Find out more on GitHub</h2>
      </div>
      <div className="icons">
        <FaGithub className="github-icon" />
        <FaGitlab className="gitlab-icon" />
        <FaInstagram className="instagram-icon" />
        <FaLinkedin className="linkedin-icon"/>
      </div>
    </>
  );
}

export default App;
