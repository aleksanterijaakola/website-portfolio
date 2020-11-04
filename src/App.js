import React from "react";
import { AiOutlineGitlab, AiOutlineInstagram } from "react-icons/ai";

function App() {
  return (
    <main>
      <nav>
        <article className="tapani">
          <h1>Hi, I'm Aleksanteri</h1>
          <h2>Software Engineer.</h2>
          <h3>CSS / Javascript / React</h3>
          <button className="gitlab">
            <AiOutlineGitlab />
          </button>
          <button className="ig">
            <AiOutlineInstagram />
          </button>
        </article>
      </nav>
    </main>
  );
}

export default App;
