import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import TradeRecord from '../components/TradeRecord';

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

export default function TransHistory(tradeInfo) {
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [account, setAccount] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [selectBoxToggle, setSelectBoxToggle] = useState(0);

  useEffect(() => {
    setAccount(tradeInfo.data);
    setTradeHistory(tradeInfo.data[selectedAccount].tradeHistory);
  }, [selectedAccount]);

  const holdingRecords = tradeHistory.map((history, index) => (
    <div key={index}>
      <TradeRecord
        stockName={history.stockName}
        tradeDate={history.tradeDate}
        totalPrice={history.totalPrice}
        tradeType={history.tradeType}
        tradeAmount={history.tradeAmount}
        unitPrice={history.unitPrice}
        tradePrice={history.tradePrice}
        toggleOFF={selectedAccount}
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
    <StyledHistoryContainer className="HistoryContainer">
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
      <StyledScrollArea className="container">{holdingRecords}</StyledScrollArea>
    </StyledHistoryContainer>
  );
}

const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 95%;
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledHistoryContainer = styled.div`
  height: 100%;
  margin: 0;
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
  .arrow {
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
