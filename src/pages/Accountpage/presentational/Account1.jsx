import React, { useState } from 'react';
import styled from "styled-components";
import refresh from '../../../image/btn_refresh.png';
import Logs from './Logs';

export default function Account1(props) {
  const [setUnit, setWon] = useState(false);
  return (

      <StyledCompareProfit>
          <StyledMoney>
            <div style={{ fontSize: '1rem', fontWeight: 500, color: "white" }}>
                첫번째 계좌
              </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: "white" }}>
                10,000,000원
              </div>
          </StyledMoney>

          <StyledTotalProfit> 
              {/* 새로고침 버튼 */}
            <Styledbtn src = {refresh}
                onClick = {() => {
                  setWon(!setUnit)
                }}
                >
            </Styledbtn>

            <StyledDetails>
             <summary>
                <StyledTotal>
                  {setUnit === true ? "총 손익금 (원)" : "총 손익금 (퍼센트)"}
                </StyledTotal>
                <StyledUnit>
                  {setUnit === true ? "10,000,000 원" : "00.00%"}
                </StyledUnit>
             </summary>
             <Logs/>
          </StyledDetails>
                
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

const StyledDetails = styled.details`
  & > summary {
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    list-style: none;
  }
`;

//새로고침 버튼
const Styledbtn = styled.img`
    margin-top: 25px;
    margin-right: 10px;
    float: right;
    width: 40px;
    height: 40px;
`;

// 금액
const StyledUnit = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding-left: 10px;
`;

// 총 손익금
const StyledTotal = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: gray;
    padding-left: 10px;
`;

const StyledCompareProfit = styled.div``;

const StyledMoney = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #b8a88e;
`;

const StyledTotalProfit = styled.div`
  padding-right: 20px
  padding-top: 10px;
`;


const StyledDayProfit = styled.div`
  border-top: 1px solid #b8a88e;
  text-align: center;
  height: 10vh;
  margin-bottom: 20px;
`;

// 하루 손익금
const StyledDayWon = styled.div`
  float: left;
  font-size: 1.5rem;
  width: 50%;
  padding-top: 20px;
  border-top: 1px solid gray;
  padding-bottom: 5vh;
  
`;

// 하루 수익률
const StyledDayPer = styled.div`
  float: right;
  font-size: 1.5rem;
  width: 50%;
  padding-top: 20px;
  border-left: 1px solid gray;
  border-top: 1px solid gray;
  padding-bottom: 10px;
`;
