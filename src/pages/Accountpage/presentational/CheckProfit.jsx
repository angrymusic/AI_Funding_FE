import styled from "styled-components";
import { useState } from 'react';

export default function CheckProfit() {
  const [SelectUnit, SelectPercent] = useState(0);
  return (
      <StyledCompareProfit>
        <StyledTop>
          <StyledMoney>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: "white" }}>
                10,000,000원
              </div>
          </StyledMoney>


          <StyledTotalProfit>
          <StyledUnitButton
            className={SelectUnit === 0 ? 'Unit' : 'Percent'}
            onClick={() => SelectPercent(0)}
          >
            <div style={{ fontSize: '18px', fontWeight: 700, color: "white" }}>
              총 손익금 : 10,000,000원
            </div>
            </StyledUnitButton>

            <StyledUnitButton
            className={SelectUnit === 1 ? 'Unit' : 'Percent'}
            onClick={() => SelectPercent(1)}
          > 
            </StyledUnitButton>

          </StyledTotalProfit>

          <StyledDayProfit>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: "white" }}>
              하루 손익금 
              <StyledLine>
              </StyledLine> 
              </div>
          </StyledDayProfit>

        </StyledTop>
        <StyledBottom>
        </StyledBottom>
      </StyledCompareProfit>
      
  );
}
//const StyledPercentButton = styled.div``;
const StyledUnitButton = styled.div``;

const StyledLine = styled.div``;


const StyledCompareProfit = styled.div`
`;

const StyledDayProfit = styled.div`
  text-align: center;

`;

const StyledMoney = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(184, 168, 142);
  }
`;

const StyledTotalProfit = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(184, 168, 142);
  }
  ${(props)=>{
    if(props.className === 'Unit'){
    }
  }}
`;

const StyledTop = styled.div`
height: 40vh;
border: solid 1px #b8a88e;
border-radius: 10px;
background-color: black;
position: relative;
margin: 10px
`;
const StyledBottom = styled.div`
height: 40vh;
border: solid 1px #b8a88e;
border-radius: 10px;
background-color: black;
position: relative;
margin: 10px
`;