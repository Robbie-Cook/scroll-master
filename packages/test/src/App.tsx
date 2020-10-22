/**
 * @jsx jsx
 */
import { jsx, css } from "@emotion/core";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollMaster from "scroll-master";
import MainContent from './main/MainContent';

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
      <main>
        <MainContent />
      </main>
      <div
        css={css`
          height: 500px;
          margin-top: 100px;
        `}
        data-sticky-container
      >
        <div className="scroll-master" data-margin-top="20px">
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
