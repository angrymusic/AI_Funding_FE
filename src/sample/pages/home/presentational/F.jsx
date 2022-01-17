import React from "react";
import styled from "styled-components";

export default function F(props) {
  var ud = [];
  ud[0] = "▲";
  ud[1] = "▼";
  return (
    <div className={props.className}>
      <StyledBox className="Box">
        <StyledUpDown className={props.updown === "up" ? "up" : "down"}>{props.updown === "up" ? ud[0] : ud[1]}</StyledUpDown>
        {props.first || "default"}
      </StyledBox>
    </div>
  );
}

const StyledBox = styled.div`
  box-sizing: border-box;
  border: solid white 1px;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  display: inline-block;
  text-align: center;
  background-color: w;
  padding-inline: 10px;
`;

const StyledUpDown = styled.strong`
  ${({ updown }) => {
    return updown === "up" ? `color: red` : `color: blue`;
  }}
`;
