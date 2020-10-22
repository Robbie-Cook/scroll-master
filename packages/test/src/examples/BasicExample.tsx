/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ScrollMaster from "scroll-master";

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
  React.useEffect(() => {
    new ScrollMaster(".scroll-master");
  }, []);
  return (
    <div
      css={css`
        height: 500px;
        background-color: #3d3d3d;
        padding: 30px;
      `}
      data-sticky-container
    >
      <div
        className="scroll-master"
        data-margin-top="30"
        data-margin-bottom="30"
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
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
  );
};

export default BasicExample;
