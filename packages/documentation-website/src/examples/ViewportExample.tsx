/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ScrollMaster from "scroll-master";
import Editor from "../editor/Editor";
import { Preview } from "../editor/Preview";

/**
 * Interface for Viewport props
 */
export interface ViewportProps {
  children?: any;
}

/**
 *  A Viewport component.
 */
const Viewport: React.FC<ViewportProps> = (props) => {
  return (
    <Preview
      codepen={
        <iframe
          loading="lazy"
          src="https://codesandbox.io/embed/viewport-simple-react-g7x1q9?fontsize=14&hidenavigation=1&theme=dark&view=editor"
          css={css`
            width: 100%;
            height: 500px;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
          `}
          title="Viewport Simple React"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      }
    >
      <div
        style={{
          height: "200vh",
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
              flexDirection: "column",
              height: "110vh",
              overflow: "hidden",
            }}
          >
            {(() => {
              const generator = () => <div>Sticky element</div>;
              let items = [];
              for (let i = 0; i < 40; i++) {
                items.push(generator());
              }
              return items;
            })()}
          </div>
        </div>
      </div>
    </Preview>
  );
};

export default Viewport;
