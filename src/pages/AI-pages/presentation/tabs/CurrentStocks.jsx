import React, { useEffect, useState } from 'react';
import StockInfo from '../components/StockInfo';
import styled, { keyframes } from 'styled-components';
import LineChart from '../components/LineChart';
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
const selectBoxAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-5px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export default function CurrentStock(stockInfo) {
  const [account, setAccount] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailName, setDetailName] = useState('none');
  const [selectBoxToggle, setSelectBoxToggle] = useState(0);

  useEffect(() => {
    setAccount(stockInfo.data);
    setStocks(stockInfo.data[selectedAccount].stock);
  }, [selectedAccount]);

  const holdingStocks = stocks.map((stock, index) => (
    <div
      key={index}
      onClick={() => {
        setDetailName(stock.stockName);
        setDetailInfo(stock.stockDetail);
      }}
    >
      <StockInfo
        stockName={stock.stockName}
        currentPrice={stock.currentPrice}
        stockPriceChange={stock.stockPriceChange}
        stockRateChange={stock.stockRateChange}
        stockChange={stock.stockChange}
      />
    </div>
  ));

  let arrayOfSelectBox = [];
  let accountSelector; //selectBox setting
  function setAccountSelector() {
    let accountSelector = [];
    for (let i = 0; i < account.length; i++) {
      accountSelector.push(
        <StyledAccountlist key={i} value={i} onClick={(e) => setSelectedAccount(e.target.value)}>
          {account[i].accountName}
        </StyledAccountlist>
      );
      arrayOfSelectBox.push(account[i].accountName);
    }
    return accountSelector;
  }
  accountSelector = setAccountSelector();

  return (
    <StyledScrollArea className="container">
      <StyledSelectBox className="selectBox">
        <StyledAccountSelector>
          <div className="selected" onClick={() => setSelectBoxToggle(~selectBoxToggle)}>
            <div className="selectedAccount">{arrayOfSelectBox[selectedAccount]}</div>
            <div className="arrow" style={{ marginLeft: '1em' }}>
              ▼
            </div>
          </div>
          <StyledUl
            className={selectBoxToggle === -1 ? 'ul active' : 'ul'}
            onClick={() => setSelectBoxToggle(~selectBoxToggle)}
          >
            {accountSelector}
          </StyledUl>
        </StyledAccountSelector>
      </StyledSelectBox>
      <StyledStocks>{holdingStocks}</StyledStocks>
      <StyledDetailInfo className={detailName === 'none' ? 'CloseInfo' : 'OpenInfo'}>
        <StyledBackButton onClick={() => setDetailName('none')}>◀ 이전</StyledBackButton>
        <StyledStackGraph className="graph">
          {detailName}
          <LineChart stockDetail={detailInfo} />
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
  animation: ${InfoAnimation} 0.5s ease-in-out;
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
  height: 100%;
`;
const StyledSelectBox = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledAccountSelector = styled.div`
  width: 30%;
  display: inline;
  margin: 5px 10px 0 0;
  float: right;
  border-radius: 7px;
  color: white;

  .selected {
    display: flex;
    justify-content: center;
    padding: 8px 5px;
  }
  .selectedAccount {
    max-width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ul {
    display: none;
  }
  .ul.active {
    display: initial;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 30%;
  position: absolute;
  background: black;
  margin: 1px 0 0 -1px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  animation: ${selectBoxAnimation} 0.2s ease-in-out;
  z-index: 1;
`;
const StyledAccountlist = styled.li`
  padding: 3px 5px;
  margin: 0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    background: #888;
    border-radius: 7px;
  }
`;
const StyledStocks = styled.div`
  animation: ${selectBoxAnimation} 0.5s ease-in-out;
`;
