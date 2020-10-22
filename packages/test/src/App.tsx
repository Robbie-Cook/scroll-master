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

function App() {
  React.useEffect(() => {
    new ScrollMaster(".scroll-master");
  }, []);
  return (
    <div
      css={css`
        min-height: 200vh;
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
      <div
        css={css`
          height: 500px;
          margin-top: 100px;
          background-color: #3d3d3d;
          padding: 30px;
        `}
        data-sticky-container
      >
        <div
          className="scroll-master"
          data-margin-top="30"
          data-margin-bottom="30"
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <div>Sticky element</div>
            <div>Sticky element</div>
            <div>Sticky element</div>
            <div>Sticky element</div>
            <div>Sticky element</div>
            <div>Sticky element</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
