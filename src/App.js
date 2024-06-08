import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <main className="text-white-400 bg-black-900 body-font">
      <NavBar>
        <About>
          <Projects>
            <Skills>
              <Contact>
              </Contact>
            </Skills>
          </Projects>
        </About>
      </NavBar>
    </main>
  );
}