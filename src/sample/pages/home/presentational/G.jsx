import React from "react";
import styled from "styled-components";

export default function G(props) {
  var ud = [];
  ud[0] = "▲";
  ud[1] = "▼";
  return (
    <div className={props.className}>
      <StyledString className="String">
        {props.first || "default"}
        <br></br>
        <StyledUpDown className={props.updown === "up" ? "up" : "down"}>{props.updown === "up" ? ud[0] : ud[1]}</StyledUpDown>
        {props.second || "default"}
      </StyledString>
    </div>
  );
}

const StyledString = styled.div`
  color: rgb(255, 255, 255);
  display: inline-block;
  text-align: center;
`;

const StyledUpDown = styled.strong`
  ${({ updown }) => {
    return updown === "up" ? `color: red` : `color: blue`;
  }}
`;
