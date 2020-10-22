/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for MainContent props
 */
export interface MainContentProps {
  children?: any;
}

/**
 *  A MainContent component.
 */
const MainContent: React.FC<MainContentProps> = (props) => {
  return (
    <React.Fragment>
      <h1>Scroll Master</h1>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=Robbie-Cook&repo=scroll-master&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
      <h3>
        A better `position: sticky`
      </h3>
      <p>
        This project was forked from{" "}
        <a href="https://github.com/rgalus/sticky-js">sticky-js</a>, with some
        features added.
      </p>
      <p>
        E.g., the option to apply no styles, only a class name, so custom styles
        can be applied.
      </p>
      <p>
        Options listed{" "}
        <a href="https://github.com/Robbie-Cook/scroll-master/tree/master/packages/scroll-master#options">
          here
        </a>
        .
      </p>
      <footer>
        <p>
          Ruler by{" "}
          <a
            href="https://www.linkedin.com/in/artur-arsalanov-ab3a6895"
            target="_blank"
            title="Find him on LinkedIn!"
          >
            ArturArsalanov
          </a>
        </p>
        <p>
          <a href="https://codepen.io/pbweb/pen/grQKEK">CodePen</a>
        </p>
      </footer>
    </React.Fragment>
  );
};

export default MainContent;
