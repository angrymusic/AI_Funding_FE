import styled from "styled-components";
import { useState } from 'react';
import refresh from '../../../image/btn_refresh.png';

export default function Account2() {
  const [SelectUnit, SelectPercent] = useState(0);
  return (
      <StyledCompareProfit>
          <StyledMoney>
            <div style={{ fontSize: '1rem', fontWeight: 500, color: "white" }}>
                두번째 계좌
              </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: "white" }}>
                20,000,000원
              </div>
          </StyledMoney>


          <StyledTotalProfit>
            <StyledUnitMiddle
            className={SelectUnit === 0 ? 'Unit' : 'Percent'}
            onClick={() => SelectPercent(0)}
            >
                <StyledTotal>
                총 손익금(원)
                </StyledTotal>
                <StyledUnit>
                30,000,000원
                <Styledbtn src = {refresh} />

                </StyledUnit>
            
            </StyledUnitMiddle>

          </StyledTotalProfit>

          <StyledDayProfit>
            <StyledDayWon>
                하루 손익금
                <br/>
                + 000000 원
            </StyledDayWon>
            <StyledDayPer>
                하루 수익률
                <br/>
                + 00.00 %
            </StyledDayPer>
          </StyledDayProfit>
          
      </StyledCompareProfit>
      
  );
}
const StyledUnitMiddle = styled.div``;

// 총 손익금
const StyledTotal = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: gray;
`;

// 금액
const StyledUnit = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

//새로고침 버튼
const Styledbtn = styled.img`
    float: right;
    width: 40px;
    height: 40px;
`;


const StyledCompareProfit = styled.div`
`;

const StyledMoney = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #b8a88e;

`;

const StyledTotalProfit = styled.div`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #b8a88e;

  ${(props)=>{
    if(props.className === 'Unit'){
    }
  }}
`;


const StyledDayProfit = styled.div`
  text-align: center;
  height: 10vh;
`;

// 하루 손익금
const StyledDayWon = styled.div`
  float: left;
  font-size: 5vw;
  width: 50%;
  margin-top: 20px;
  border-right: 1px solid #b8a88e;
`;

// 하루 수익률
const StyledDayPer = styled.div`
  float: right;
  font-size: 5vw;
  width: 50%;
  margin-top: 20px;
`;
