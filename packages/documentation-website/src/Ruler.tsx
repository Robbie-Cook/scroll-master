/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Ruler props
 */
export interface RulerProps {
  children?: any;
}

/**
 *  A Ruler component.
 */
const Ruler: React.FC<RulerProps> = (props) => {
  return (
    <div
      css={css`
        .ruler {
          position: relative;
          width: 1000px;
          margin: 20px auto;
          height: 14px;
        }
        .ruler .cm,
        .ruler .mm {
          position: absolute;
          border-left: 1px solid #555;
          height: 14px;
          width: 10%;
        }
        .ruler .cm:after {
          position: absolute;
          bottom: -15px;
          font: 11px/1 sans-serif;
        }
        .ruler .mm {
          height: 5px;
        }
        .ruler .mm:nth-of-type(5) {
          height: 10px;
        }
        .ruler .cm:nth-of-type(1) {
          left: 0%;
        }
        .ruler .cm:nth-of-type(1):after {
          content: "0";
        }
        .ruler .cm:nth-of-type(2) {
          left: 10%;
        }
        .ruler .cm:nth-of-type(2):after {
          content: "1";
        }
        .ruler .cm:nth-of-type(3) {
          left: 20%;
        }
        .ruler .cm:nth-of-type(3):after {
          content: "2";
        }
        .ruler .cm:nth-of-type(4) {
          left: 30%;
        }
        .ruler .cm:nth-of-type(4):after {
          content: "3";
        }
        .ruler .cm:nth-of-type(5) {
          left: 40%;
        }
        .ruler .cm:nth-of-type(5):after {
          content: "4";
        }
        .ruler .cm:nth-of-type(6) {
          left: 50%;
        }
        .ruler .cm:nth-of-type(6):after {
          content: "5";
        }
        .ruler .cm:nth-of-type(7) {
          left: 60%;
        }
        .ruler .cm:nth-of-type(7):after {
          content: "6";
        }
        .ruler .cm:nth-of-type(8) {
          left: 70%;
        }
        .ruler .cm:nth-of-type(8):after {
          content: "7";
        }
        .ruler .cm:nth-of-type(9) {
          left: 80%;
        }
        .ruler .cm:nth-of-type(9):after {
          content: "8";
        }
        .ruler .cm:nth-of-type(10) {
          left: 90%;
        }
        .ruler .cm:nth-of-type(10):after {
          content: "9";
        }
        .ruler .cm:nth-of-type(11) {
          left: 100%;
        }
        .ruler .cm:nth-of-type(11):after {
          content: "10";
        }
        .ruler .mm:nth-of-type(1) {
          left: 10%;
        }
        .ruler .mm:nth-of-type(2) {
          left: 20%;
        }
        .ruler .mm:nth-of-type(3) {
          left: 30%;
        }
        .ruler .mm:nth-of-type(4) {
          left: 40%;
        }
        .ruler .mm:nth-of-type(5) {
          left: 50%;
        }
        .ruler .mm:nth-of-type(6) {
          left: 60%;
        }
        .ruler .mm:nth-of-type(7) {
          left: 70%;
        }
        .ruler .mm:nth-of-type(8) {
          left: 80%;
        }
        .ruler .mm:nth-of-type(9) {
          left: 90%;
        }
        .ruler .mm:nth-of-type(10) {
          left: 100%;
        }
        #mentionme {
          text-align: center;
          margin-top: 10%;
        }
      `}
    >
      <div className="ruler">
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm">
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
          <div className="mm"></div>
        </div>
        <div className="cm"></div>
      </div>
    </div>
  );
};

export default Ruler;
