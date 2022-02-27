/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import raw from "raw.macro";
import React, { useEffect } from "react";
import ScrollMaster from "scroll-master";
import { marked } from "marked";

// https://github.com/facebook/create-react-app/issues/3722
const Markdown = raw("../markdown/intro.md");

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
  useEffect(() => {
    new ScrollMaster(".scroll-master");
  }, []);

  return (
    <section
      css={css`
        text-align: left;
      `}
    >
      <h1>Scroll Master</h1>
      <iframe
        loading="lazy"
        src="https://ghbtns.com/github-btn.html?user=Robbie-Cook&repo=scroll-master&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
      <h2>A better `position: sticky`</h2>
      <h4>
        <a href="https://github.com/Robbie-Cook/scroll-master/tree/master/packages/test">
          Code for this example
        </a>
      </h4>
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
      </footer>
      <div
        css={css`
          margin-top: 64px;
        `}
        dangerouslySetInnerHTML={{ __html: marked(Markdown) }}
      ></div>
    </section>
  );
};

export default MainContent;
