/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import React from "react";
import Editor from "../editor/Editor";
import ScrollMaster from "scroll-master";
import { Preview } from "../editor/Preview";

/**
 * Interface for CustomStyles props
 */
export interface CustomStylesProps {
  children?: any;
}

/**
 *  A CustomStyles component.
 */
const CustomStyles: React.FC<CustomStylesProps> = (props) => {
  return (
    <Preview
      codepen={
        <iframe
          loading="lazy"
          src="https://codesandbox.io/embed/custom-styles-lovkix?fontsize=14&hidenavigation=1&theme=dark&view=editor"
          css={css`
            width: 100%;
            height: 500px;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
          `}
          title="Custom Styles"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      }
    >
      <React.Fragment>
        <div
          style={{
            height: "calc(100vh + 200px)",
            backgroundColor: "#3d3d3d",
            padding: "30px",
          }}
          data-sticky-container
        >
          <div
            className="scroll-master"
            data-custom-styles
            data-sticky-class="custom-stuck"
            data-margin-top="30"
            data-margin-bottom="30"
          >
            <div
              style={{
                display: "flex",
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
      </React.Fragment>
    </Preview>
  );
};

export default CustomStyles;
