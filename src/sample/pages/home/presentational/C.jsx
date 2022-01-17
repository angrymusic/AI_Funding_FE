import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../../../image/cup.png";

export default function ComponentC(props) {
  return (
    <div className={props.className}>
      <div>
        <Link to="/somePage">
          <StyledBtnContainer className="btnContainer">
            <StyledBtn className="btn" src={icon} />
            <StyledBtnStyle className="btnStyle" />
          </StyledBtnContainer>
        </Link>
      </div>
    </div>
  );
}

const StyledBtnContainer = styled.div`
  width: 40px;
  height: 40px;
  border: solid 1px #b8a88e;
  border-radius: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBtn = styled.img`
  width: 22px;
  height: 20px;
  overflow: hidden;
`;

const StyledBtnStyle = styled.div`
  width: 22px;
  height: 1.5px;
  background-color: #b8a88e;
`;
