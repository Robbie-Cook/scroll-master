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
import CustomStylesExample from "./examples/CustomStylesExample";
import StickToBottomExample from "./examples/StickToBottomExample";

import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

function App() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");

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
      {breakpoint !== "mobile" && (
        <React.Fragment>
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
        </React.Fragment>
      )}
      <main>
        <MainContent />
      </main>
      <section>
        <h2 id="basic-example">basic example</h2>
        <BasicExample />
      </section>
      <section>
        <h2 id="viewport">larger than viewport</h2>
        <ViewportExample />
      </section>
      <section>
        <h2 id="viewport">custom styles</h2>
        <CustomStylesExample />
      </section>
      <section>
        <h2 id="viewport">stick to bottom</h2>
        <StickToBottomExample />
      </section>
    </div>
  );
}

export default App;
