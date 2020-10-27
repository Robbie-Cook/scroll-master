/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import React from "react";
import Editor from "../editor/Editor";
import ScrollMaster from "scroll-master";

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
  React.useEffect(() => {
    new ScrollMaster(".scroll-master");
  }, []);

  const code = `
    <React.Fragment>
      {/** 
        * Global css styles (emotion js)
        */}
      <Global styles={css\`
      .stuck {
        position: fixed;
      }
    \`} />
    <div style={{
          height: "500px",
          backgroundColor: "#3d3d3d",
          padding: "30px",
        }}
        data-sticky-container
      >
        <div
          className="scroll-master custom-styles"
          data-custom-styles
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
    </React.Fragment>`;

  return (
    <React.Fragment>
      <Editor code={code} />
    </React.Fragment>
  );
};

export default CustomStyles;
