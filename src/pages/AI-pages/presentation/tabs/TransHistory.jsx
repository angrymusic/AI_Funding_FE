import styled from 'styled-components';
import { useState } from 'react';

export default function TransHistory() {
  const [SelectedTerm, SelectTerm] = useState(0);
  return (
    <StyledHistoryContainer className="HistoryContainer">
      <StyledTermSelector className="SelectTerm">
        <StyledTermButton
          className={SelectedTerm === 0 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(0)}
        >
          ALL
        </StyledTermButton>
        <StyledBar>|</StyledBar>
        <StyledTermButton
          className={SelectedTerm === 1 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(1)}
        >
          1M
        </StyledTermButton>
        <StyledBar>|</StyledBar>
        <StyledTermButton
          className={SelectedTerm === 3 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(3)}
        >
          3M
        </StyledTermButton>
        <StyledBar>|</StyledBar>
        <StyledTermButton
          className={SelectedTerm === 6 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(6)}
        >
          6M
        </StyledTermButton>
      </StyledTermSelector>
      <StyledScrollArea className="container">
        <StyledHistories className="Histories">
          <StyledDetails>
            <summary>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>종목 이름</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 300, color: 'gray' }}>거래 날짜</div>
            </summary>
            <StyledDetailsContainer>
              <StyledDetailsContent className="detailInfo">
                거래종류 : 주식 매도 / 주식 매수
                <br />
                거래수량 : 00
                <br />
                단가 : 000,000원
                <br />
                매수가 : 000,000원
              </StyledDetailsContent>
            </StyledDetailsContainer>
          </StyledDetails>
          <StyledDetails>
            <summary>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>종목 이름</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 300, color: 'gray' }}>거래 날짜</div>
            </summary>
            <StyledDetailsContainer>
              <StyledDetailsContent className="detailInfo">
                거래종류 : 주식 매도 / 주식 매수
                <br />
                거래수량 : 00
                <br />
                단가 : 000,000원
                <br />
                매수가 : 000,000원
              </StyledDetailsContent>
            </StyledDetailsContainer>
          </StyledDetails>
        </StyledHistories>
      </StyledScrollArea>
    </StyledHistoryContainer>
  );
}

const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 95%;
`;

const StyledHistoryContainer = styled.div`
  height: 85vh;
  margin: 10px;
`;
const StyledTermSelector = styled.div`
  margin: auto;
`;
const StyledTermButton = styled.span`
  font-weight: bold;
  margin: 0 8px;
  font-size: 1.1rem;
  ${(props) => {
    return props.className === 'selected'
      ? `color: rgb(184, 168, 142)`
      : `color: rgb(119, 119, 119)`;
  }};
`;

const StyledBar = styled.span`
  font-weight: bold;
  color: rgb(151, 151, 151);
`;

const StyledHistories = styled.div`
  padding: 0 10px;
`;

const StyledDetails = styled.details`
  & > summary {
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(184, 168, 142);
    // 삼각형 제거
    list-style: none;
  }
  & > summary::marker {
    display: none;
  }
  transition: height 0.2s ease;
  overflow: hidden;
  &:not([open]) {
    height: 5em;
  }
  &[open] {
    height: 10.5em;
  }
  &[open] > summary {
    border-bottom: 2px dashed rgb(119, 119, 119);
  }
`;

const StyledDetailsContent = styled.div`
  color: white;
  margin: auto;
  text-align: center;
  font-size: 16px;
  animation: details-show 200ms ease-in-out;
`;
const StyledDetailsContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 2px solid rgb(184, 168, 142);
`;
