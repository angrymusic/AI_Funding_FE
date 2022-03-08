import styled from 'styled-components';
export default function StockInfo({
  stockName,
  currentPrice,
  stockPriceChange,
  stockRateChange,
  stockChange,
}) {
  let color;
  let tri;
  if (stockChange === 'up') {
    color = { color: 'rgb(239, 99, 99)' };
    tri = '▲ ';
  } else if (stockChange === 'down') {
    color = { color: 'rgb(99, 201, 239)' };
    tri = '▼ ';
  } else {
    color = { color: 'rgb(119, 119, 119)' };
    tri = '- ';
  }
  return (
    <StyledStuckInfo className="StuckInfo">
      <StyledstockName className="stockName">{stockName}</StyledstockName>
      <StyledColor style={color}>
        <StyledCurrentPrice className="CurrentPrice">{currentPrice}</StyledCurrentPrice>

        <StyledFluc className="RateFluc">
          <StyledRateFluc>{stockRateChange}</StyledRateFluc>
          <StyledPriceFluc className="">
            {tri}
            {stockPriceChange}
          </StyledPriceFluc>
        </StyledFluc>
        <StyledPriceFluc className="PriceFluc"></StyledPriceFluc>
      </StyledColor>
    </StyledStuckInfo>
  );
}

const StyledStuckInfo = styled.div`
  background: black;
  color: white;
  margin: 10px 10px;
  border-radius: 10px;
  padding: 7px;

  //   크기 자동 수정
  overflow: hidden;

  //   우측 하단 고정
  position: relative;
`;

const StyledColor = styled.div``;
const StyledstockName = styled.div`
  font-size: 2.5vh;
`;
const StyledCurrentPrice = styled.div`
  font-size: 4.5vh;
  margin-right: auto;
  float: left;
`;

const StyledFluc = styled.div`
  float: right;
  margin-right: 1vh;
  font-size: 2.2vh;

  //   우측 하단 고정
  position: absolute;
  bottom: 10px;
  right: 0px;
`;

const StyledPriceFluc = styled.div`
  float: right;
  margin-right: 1vh;
  font-size: 2.2vh;
`;

const StyledRateFluc = styled.div`
  float: right;
  margin-right: 1vh;
  font-size: 2.2vh;
`;
