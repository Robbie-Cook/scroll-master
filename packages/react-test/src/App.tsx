/**
 * @jsx jsx
 */
import { jsx, css } from "@emotion/core";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollMaster from "scroll-master";

function App() {
  React.useEffect(() => {
    new ScrollMaster(".scroll-master");
  }, []);
  return (
    <div
      css={css`
        height: 200vh;
      `}
      className="App"
    >
      <div
        css={css`
          height: 500px;
          margin-top: 100px;
        `}
        data-sticky-container
      >
        <div className="scroll-master">
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
