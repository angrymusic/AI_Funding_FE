import styled from "styled-components";

export default function Daycount(props) {
  return <StyledP className={props.className}>투자시작일로부터 +00일</StyledP>;
}

const StyledP = styled.p`
  margintop: 10px;
  marginleft: 10px;
`;
