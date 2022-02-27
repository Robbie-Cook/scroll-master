/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import React from "react";
import ScrollMaster from "scroll-master";
import parser from "prettier/parser-babel";
import prettier from "prettier";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

/**
 * Interface for LiveEditor props
 */
export interface LiveEditorProps {
  children?: React.ReactElement;
  codepen?: React.ReactChild;
}

/**
 *  A Previewer for code
 */
export const Preview: React.FC<LiveEditorProps> = (props) => {
  return (
    <React.Fragment>
      <div className="target">{props.children}</div>

      <h3>Code for this example</h3>

      {props.codepen}
    </React.Fragment>
  );
};
