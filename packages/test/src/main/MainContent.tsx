  /** @jsx jsx */
  import { css, jsx } from "@emotion/core"
  import React from "react"

  /**
   * Interface for MainContent props
   */
  export interface MainContentProps {
    children?: any;
  };

  /**
   *  A MainContent component.
   */
  const MainContent: React.FC<MainContentProps> = (props) => {
    return <React.Fragment>
      <h1>Scroll-Master</h1>
    </React.Fragment>

  export default MainContent
