import React from "react";
import styled from "styled-components";
import Profit from "./Profit";

export default function MyAccount(props) {
  return (
    <div>
      <MyAccountStyle>
        <InfoRowStyle>
          <InfoStyle>{props.name || "default"}&nbsp;</InfoStyle>님의&nbsp;&nbsp;
          <InfoStyle>{props.accountName || "default"}</InfoStyle>
          &nbsp;계좌입니다.
        </InfoRowStyle>

        <div>투자 시작일로부터 + {getStartDay(props.startDay) || "00"}일</div>

        <MoneyRowStyle>
          <MoneyStyle>{props.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "000,000"}</MoneyStyle>원
        </MoneyRowStyle>

        <ProfitColumnStyle>
          <Profit
            name="금일 수익률"
            value={props.todayIncome || "0.00"}
            border="true"
          ></Profit>
          <Profit
            name="금일 수익금"
            value={props.todayProfit || "0"}
            border="true"
          ></Profit>
        </ProfitColumnStyle>

        <ProfitColumnStyle>
          <Profit
            name="누적 수익률"
            value={props.totalIncome || "0.00"}
          ></Profit>
          <Line></Line>
          <Profit name="누적 수익금" value={props.totalProfit || "0"}></Profit>
        </ProfitColumnStyle>
      </MyAccountStyle>
    </div>
  );
}

const getStartDay = (createAt) => {
	const todayDate = new Date();
	const createDate = new Date(createAt);
	const startDay = Math.ceil((todayDate.getTime() - createDate.getTime()) / (1000*60*60*24));
	return startDay;
} 


/*스타일*/
const MyAccountStyle = styled.div`
  flex-grow: 1;
  border: 1px solid #b8a88e;
  border-radius: 10px;
  padding: 1vh 1vh 2vh 1vh;
  background-color: #000000;
`;

const InfoRowStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
`;

const InfoStyle = styled.div`
  font-size: 21px;
	font-weight: 700;
`;

const MoneyRowStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20vw;
  font-size: 32px;
  font-weight: regular;
`;

const MoneyStyle = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

const ProfitColumnStyle = styled.div`
  margin: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
	width: 1px;
	height: 80px;
	background-color: white;
	transform: rotate(45deg);
`