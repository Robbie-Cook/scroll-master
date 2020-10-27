/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ScrollMaster from "scroll-master";
import parser from "prettier/parser-babel";
import prettier from "prettier";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

/**
 * Interface for LiveEditor props
 */
export interface LiveEditorProps {
  code: string;
}

/**
 *  A LiveEditor component.
 */
const Editor: React.FC<LiveEditorProps> = (props) => {
  const code = prettier.format(props.code, {
    parser: "babel",
    plugins: [parser],
  });

  return (
    <div
      css={css`
        /* display: flex; */
        /* flex-wrap: wrap; */
      `}
    >
      <LiveProvider code={code}>
        <h3>Example</h3>
        <LivePreview />
        <h3>Code Editor</h3>
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  );
};

export default Editor;
