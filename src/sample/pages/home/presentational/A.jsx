import styled from "styled-components";

export default function Accountname(props) {
  return (
    <p className={props.className}>
      <StyledSpan>{props.name || "default"}</StyledSpan>님의 <StyledSpan>{props.accountName || "default"}</StyledSpan> 입니다.
    </p>
  );
}

const StyledSpan = styled.span`
  font-size: x-large;
  font-weight: bold;
`;
