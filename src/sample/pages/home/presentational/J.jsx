import styled from "styled-components";
import D from "./D";
import E from "./E";
import G from "./G";
import H from "./H";

// 레이아웃 컴포넌트
export default function J() {
  return (
    <JLayout>
      <LayoutedH></LayoutedH>
      <LayoutedE></LayoutedE>
      <LayoutedD money={100000}></LayoutedD>
      <LayoutedG1 first={"금일 수익률"} second={"1234"}></LayoutedG1>
      <LayoutedG2 first={"금일 수익률"} second={"1234"}></LayoutedG2>
    </JLayout>
  );
}

const JLayout = styled.div`
  position: relative;
  flex-grow: 5;
`;

const LayoutedE = styled(E)`
  // border: solid 1px red;
  position: absolute;
  left: 0;
  right: 0;
  top: 8vh;
  margin: 0 auto;
  width: fit-content;
`;

const LayoutedH = styled(H)`
  position: absolute;
  left: 0;
  right: 0;
  top: 5vh;
  width: 90vw;
  height: 2vh;
  margin: 0 auto;
  // border: solid 1px red;
`;

const LayoutedD = styled(D)`
  // border: solid 1px red;
  position: absolute;
  left: 0;
  right: 0;
  top: 12vh;
  margin: 0 auto;
  font-size: 35px;
  width: fit-content;
`;

const LayoutedG1 = styled(G)`
  // border: solid 1px red;
  position: absolute;
  top: 20vh;
  left: 15vw;
  text-align: center;
`;

const LayoutedG2 = styled(G)`
  // border: solid 1px red;
  position: absolute;
  top: 20vh;
  right: 15vw;
  text-align: center;
`;
