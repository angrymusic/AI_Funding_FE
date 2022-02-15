import React from 'react';
import styled from "styled-components";

export default function Profit(props) {
	return (
    <ProfitStyle>
      <div>{props.name}</div>
      <ValueStyle border={props.border}>
        <ArrowStyle color={props.value}>{(Number(props.value) > 0 ? "▲" : "▼") || "-"}&nbsp;</ArrowStyle>
        {props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0.00"}
        {props.name.substr(-1) === "률" ? "%" : "원"}
      </ValueStyle>
    </ProfitStyle>
  );
}

const ProfitStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	align-items: center;
  height: 7vh;
`;


const ArrowStyle = styled.div`
	color: ${(props => Number(props.color) > 0 ? "#EF6363" : "#63C9EF") || "#EF6363"}
`;

const ValueStyle = styled.div`
	display: flex;
	justify-content: center;
	border: ${(props => props.border === "true" ? "1px solid #b8a88e" : "0px") || console.log("0px")};
	border-radius: 15px;
	padding: 4px 15px 4px 15px;
`