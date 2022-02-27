/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Preview } from "../editor/Preview";

/**
 * Interface for StickToBottomExample props
 */
export interface StickToBottomExampleProps {
  children?: any;
}

/**
 *  A StickToBottomExample component.
 */
const StickToBottomExample: React.FC<StickToBottomExampleProps> = (props) => {
  return (
    <Preview
      codepen={
        <iframe
          loading="lazy"
          src="https://codesandbox.io/embed/stick-to-bottom-4s6mch?fontsize=14&hidenavigation=1&theme=dark&view=editor"
          css={css`
            width: 100%;
            height: 500px;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
          `}
          title="Stick to bottom"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      }
    >
      <div
        style={{
          height: "calc(100vh + 200px)",
          backgroundColor: "#3d3d3d",
          padding: "30px",
        }}
        data-sticky-container
        data-sticky-position="bottom"
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

export default StickToBottomExample;
