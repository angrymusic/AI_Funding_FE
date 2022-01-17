import React from "react";
import styled from "styled-components";

export default function ComponentD(props) {
  return (
    <StyledDiv className={props.className}>
      <StyledMoney id="money">{props.money || "default"}</StyledMoney>
      <StyledUnit id="unit">원</StyledUnit>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledMoney = styled.div`
  font-weight: 600;
  font-size: 32px;
`;

const StyledUnit = styled.div`
  font-weight: 200;
  font-size: 24px;
`;
