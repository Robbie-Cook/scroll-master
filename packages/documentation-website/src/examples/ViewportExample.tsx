/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ScrollMaster from "scroll-master";
import Editor from "../editor/Editor";

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
  React.useEffect(() => {
    new ScrollMaster(".scroll-viewport");
  }, []);
  return (
    <Editor
      code={`
    <div
      style={{
        height: "200vh",
        backgroundColor: "#3d3d3d",
        padding: "30px",
      }}
      data-sticky-container
    >
      <div
        className="scroll-viewport"
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
    </div>`}
    ></Editor>
  );
};

export default Viewport;
