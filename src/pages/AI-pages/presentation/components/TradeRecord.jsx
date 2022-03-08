import styled from 'styled-components';
export default function TradeRecord({
  stockName,
  tradeDate,
  totalPrice,
  tradeType,
  tradeAmount,
  unitPrice,
  tradePrice,
}) {
//   let plusMinus;
//   if (unitPrice > tradePrice) {
//     plusMinus = '-';
//   } else if (unitPrice < tradePrice) {
//   }
  return (
    <StyledTradeRecord className="Histories">
      <StyledDetails>
        <summary>
          <div
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div className="leftside">{stockName}</div>
            <div className="rightside">{totalPrice.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</div>
          </div>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'gray',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div className="leftside">{tradeDate}</div>
            <StyledType className="rightside" className={tradeType === '매수' ? 'Buy' : 'Sell'}>{tradeType}</StyledType>
          </div>
        </summary>
        <StyledDetailsContainer>
          <StyledDetailsContent className="detailInfo">
            거래종류 :{' '}
            <StyledType className={tradeType === '매수' ? 'Buy' : 'Sell'}>{tradeType}</StyledType>
            <br />
            거래수량 : {tradeAmount}주
            <br />
            단가 : {unitPrice.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
            <br />
            매수가 : {tradePrice.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
          </StyledDetailsContent>
        </StyledDetailsContainer>
      </StyledDetails>
    </StyledTradeRecord>
  );
}

const StyledType = styled.strong`
  ${(props) => {
    return props.className === 'Buy' ? `color: rgb(239, 99, 99)` : `color: rgb(99, 201, 239)`;
  }};
`;

const StyledTradeRecord = styled.div`
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
