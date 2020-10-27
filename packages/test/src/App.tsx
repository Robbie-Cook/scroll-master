/**
 * @jsx jsx
 */
import { jsx, css } from "@emotion/core";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollMaster from "scroll-master";
import MainContent from "./main/MainContent";
import Ruler from "./Ruler";
import BasicExample from "./examples/BasicExample";
import ViewportExample from "./examples/ViewportExample";

function App() {
  return (
    <div
      css={css`
        min-height: 200vh;

        section {
          margin-top: 100px;
        }
      `}
      className="App"
    >
      <div
        css={css`
          position: absolute;
          top: 500px;
          left: -457px;

          transform: rotate(90deg);
        `}
      >
        <Ruler />
      </div>
      <div
        css={css`
          position: absolute;
          top: 1700px;
          left: -457px;

          transform: rotate(90deg);
        `}
      >
        <Ruler />
      </div>
      <main>
        <MainContent />
      </main>
      <section>
        <h2 id="basic-example">Basic Example</h2>
        <BasicExample />
      </section>
      <section>
        <h2 id="viewport">Larger than viewport</h2>
        <ViewportExample />
      </section>
    </div>
  );
}

export default App;
