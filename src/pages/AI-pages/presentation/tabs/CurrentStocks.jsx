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
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailName, setDetailName] = useState("none");
  useEffect(() => {
    axios
      .post('http://localhost:8060/', {
        customer_info_id: 1,
        login_type: '00',
      })
      .then((res) => {
        //res로 백에서 데이터 정보가 넘어옴
        setAccount(res.data.account);
        setStocks(res.data.account[selectedAccount].stock);
        console.log("Change Account")
      })
      .catch((err) => {
        console.log('AIpage_currentstock_axios_err');
      });
  }, [selectedAccount]);
  const holdingStocks = stocks.map((stock, index) => (
    <div key={index} onClick={() => {
      setDetailName(stock.stockName);
      setDetailInfo(stock.stockDetail);
    }
      }>
      <StockInfo
        stockName={stock.stockName}
        currentPrice={stock.currentPrice}
        stockPriceChange={stock.stockPriceChange}
        stockRateChange={stock.stockRateChange}
        stockChange={stock.stockChange}
      />
    </div>
  ));
  let accountSelector;
  function setAccountSelector() {
    let accountSelector = [];
    for (let i = 0; i < account.length; i++) {
      accountSelector.push(
        <option key={i} value={i}>
          {account[i].accountName}
        </option>
      );
    }
    return accountSelector;
  }
  accountSelector = setAccountSelector();

  const selectingAccount = (e) => {
    setSelectedAccount(e.target.value);
  };
  return (
    <StyledScrollArea className="container">
      <StyledSelectBox className="accountSelector">
        <StyledSelect onChange={selectingAccount} value={selectedAccount}>
          {accountSelector}
        </StyledSelect>
      </StyledSelectBox>
      {holdingStocks}
      <StyledDetailInfo className={detailName === 'none' ? 'CloseInfo' : 'OpenInfo'}>
        <StyledBackButton onClick={() => setDetailName('none')}>◀ 이전</StyledBackButton>
        <StyledStackGraph className="graph">
          {detailName}
          <LineChart stockDetail={detailInfo}/>
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
const StyledSelectBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledSelect = styled.select`

  background: none;
  color: white;
  border: none;
  font-size: 20px;
  margin: 10px 10px 0px 10px;
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
