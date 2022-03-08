import React, { useEffect, useState } from 'react';
import StockInfo from '../components/StockInfo';
import styled, { keyframes } from 'styled-components';
import LineChart from '../components/LineChart';
import axios from 'axios';
const InfoAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateX(30px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
    `;

export default function CurrentStock() {
  const [account, setAccount] = useState([]);
  const [stocks, setStocks] = useState([]);

  const [DetailInfo, ShowDetail] = useState('none');
  useEffect(() => {
    axios
      .post('http://localhost:8000/', {
        customer_info_id: '1',
        login_type: '00',
      })
      .then((res) => {
        //res로 백에서 데이터 정보가 넘어옴?
        setAccount(res.data.account);
        setStocks(res.data.account[0]);
      });
  }, []);
  const holdingStocks = stocks.map((stock, index) => (
    <div key={index} onClick={() => ShowDetail(stock.stockName)}>
      <StockInfo
        stockName={stock.stockName}
        currentPrice={stock.currentPrice}
        stockPriceChange={stock.stockPriceChange}
        stockRateChange={stock.stockRateChange}
        stockChange={stock.stockChange}
      />
    </div>
  ));
  return (
    <StyledScrollArea className="container">
      {holdingStocks}
      <div onClick={() => ShowDetail('카카오')}>
        <StockInfo
          stockName="카카오"
          currentPrice="112,500"
          stockPriceChange="1,500"
          stockRateChange="-1.32%"
          stockChange="down"
        />
      </div>
      <div onClick={() => ShowDetail('삼성전자')}>
        <StockInfo
          stockName="삼성전자"
          currentPrice="80,200"
          stockPriceChange="7,000"
          stockRateChange="+9.28%"
          stockChange="up"
        />
      </div>
      <div onClick={() => ShowDetail('광운대')}>
        <StockInfo
          stockName="광운대"
          currentPrice="40,200"
          stockPriceChange="0"
          stockRateChange="=0.00%"
          stockChange="none"
        />
      </div>
      <StyledDetailInfo className={DetailInfo === 'none' ? 'CloseInfo' : 'OpenInfo'}>
        <StyledBackButton onClick={() => ShowDetail('none')}>◀ 이전</StyledBackButton>
        <StyledStackGraph className="graph">
          {DetailInfo}
          <LineChart />
        </StyledStackGraph>
      </StyledDetailInfo>
    </StyledScrollArea>
  );
}

const StyledDetailInfo = styled.div`
  position: fixed;
  top: 60px;
  background-color: rgb(32, 32, 32);
  width: 100%;
  height: 100%;
  color: white;
  animation: ${InfoAnimation} 0.6s ease-in-out;
  ${(props) => {
    return props.className === 'CloseInfo'
      ? `display: none;`
      : `display: block;
      `;
  }};
`;

const StyledBackButton = styled.div`
  color: rgb(152, 128, 101);
  padding: 10px;
  width: 20vw;
`;
const StyledStackGraph = styled.div`
  border: 1px solid rgb(152, 128, 101);
  border-radius: 10px;
  height: 75vh;
  width: 90vw;
  margin: 0 auto;
  padding: 10px;
`;

const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 85vh;
`;
