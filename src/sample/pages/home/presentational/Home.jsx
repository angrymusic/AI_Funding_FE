import styled from "styled-components";
import I from "./I";
import J from "./J";

export default function Home() {
  return (
    <StyledHome>
      <I></I>
      <J></J>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  // border: 3px yellow solid;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
