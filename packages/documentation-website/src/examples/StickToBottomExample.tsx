/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Editor from '../editor/Editor';
import ScrollMaster from "scroll-master";

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
  React.useEffect(() => {
    new ScrollMaster(".scroll-master");
  }, []);

  const code = `<div style={{
        height: "500px",
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
    </div>`;

  return (
    <Editor code={code} />
  );
};

export default StickToBottomExample;
