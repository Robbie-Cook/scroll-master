/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import Editor from "../editor/Editor";
import ScrollMaster from "scroll-master";
import ReactDOM from "react-dom";
import { Preview } from "../editor/Preview";

/**
 * Interface for BasicExample props
 */
export interface BasicExampleProps {
  children?: any;
}

/**
 *  A BasicExample component.
 */
const BasicExample: React.FC<BasicExampleProps> = (props) => {
  return (
    <Preview
      codepen={
        <iframe
          loading="lazy"
          src="https://codesandbox.io/embed/simple-example-react-np0pnw?fontsize=14&hidenavigation=1&theme=dark&view=editor"
          css={css`
            width: 100%;
            height: 500px;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
          `}
          title="Simple Example React"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      }
    >
      <div
        style={{
          height: "500px",
          backgroundColor: "#3d3d3d",
          padding: "30px",
        }}
        data-sticky-container
      >
        <div
          className="scroll-master"
          data-margin-top="30"
          data-margin-bottom="30"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
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
    </Preview>
  );
};

export default BasicExample;
