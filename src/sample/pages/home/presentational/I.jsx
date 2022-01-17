import styled from "styled-components";
import C from "./C";
import D from "./D";
import G from "./G";
import F from "./F";
import A from "./A";
import B from "./B";

// 레이아웃 컴포넌트
export default function I(props) {
  return (
    <ILayout>
      <LayoutedA name={"강연구"}></LayoutedA>
      <LayoutedC></LayoutedC>
      <LayoutedB></LayoutedB>
      <LayoutedD money={100000}></LayoutedD>
      <LayoutedF1 first={"0.00%"}></LayoutedF1>
      <LayoutedG1 first={"누적 수익률"} second={"1234"}></LayoutedG1>
      <LayoutedF2 first={"0.00%"}></LayoutedF2>
      <LayoutedG2 first={"누적 수익률"} second={"1234"}></LayoutedG2>
    </ILayout>
  );
}

const ILayout = styled.div`
  flex-grow: 8;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  margin: 8px;
  background-color: black;
  position: relative;
`;

const LayoutedA = styled(A)`
  // border: solid 1px red;
  position: absolute;
  top: 3vh;
  left: 3vw;
  margin: 0;
`;

const LayoutedB = styled(B)`
  // border: solid 1px red;
  position: absolute;
  top: 7vh;
  left: 7vw;
  margin: 0;
`;

const LayoutedC = styled(C)`
  // border: solid 1px red;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 1.4vh;
  right: 3vw;
`;

const LayoutedD = styled(D)`
  // border: solid 1px red;
  position: absolute;
  top: 20vh;
  margin: 0 auto;
  text-align: center;
  font-size: 45px;
  left: 0;
  right: 0;
  width: fit-content;
`;

const LayoutedF1 = styled(F)`
  // border: solid 1px red;
  position: absolute;
  top: 35vh;
  left: 15.8vw;
`;

const LayoutedG1 = styled(G)`
  // border: solid 1px red;
  position: absolute;
  top: 39vh;
  left: 15vw;
  text-align: center;
`;

const LayoutedF2 = styled(F)`
  // border: solid 1px red;
  position: absolute;
  top: 35vh;
  right: 15.8vw;
`;

const LayoutedG2 = styled(G)`
  // border: solid 1px red;
  position: absolute;
  top: 39vh;
  right: 15vw;
  text-align: center;
`;
