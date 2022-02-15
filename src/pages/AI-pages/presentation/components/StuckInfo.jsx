import styled from 'styled-components';
export default function StuckInfo({
  StuckName,
  CurrentPrice,
  PriceFluc,
  RateFluc,
  Fluc,
  onClick,
}) {
  let color;
  let tri;
  if (Fluc === 'up') {
    color = { color: 'rgb(239, 99, 99)' };
    tri = '▲ ';
  } else if (Fluc === 'down') {
    color = { color: 'rgb(99, 201, 239)' };
    tri = '▼ ';
  } else {
    color = { color: 'rgb(119, 119, 119)' };
    tri = '- ';
  }
  return (
    <StyledStuckInfo className="StuckInfo">
      <StyledStuckName className="StuckName">{StuckName}</StyledStuckName>
      <StyledColor style={color}>
        <StyledCurrentPrice className="CurrentPrice">
          {CurrentPrice}
        </StyledCurrentPrice>

        <StyledFluc className="RateFluc">
          <StyledRateFluc>{RateFluc}</StyledRateFluc>
          <StyledPriceFluc className="">
            {tri}
            {PriceFluc}
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

const StyledColor = styled.div`
  ${(props) => {
    return props.className === 'increased'
      ? `color: rgb(239, 99, 99)`
      : `color: rgb(99, 201, 239)`;
  }};
`;
const StyledStuckName = styled.div`
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
