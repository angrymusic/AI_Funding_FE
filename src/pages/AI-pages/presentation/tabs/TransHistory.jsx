import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TradeRecord from '../components/TradeRecord';

export default function TransHistory() {
  const [selectedTerm, selectTerm] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [account, setAccount] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  useEffect(() => {
    axios
      .post('http://localhost:8070/', {
        customer_info_id: 1,
        login_type: '00',
      })
      .then((res) => {
        //res로 백에서 데이터 정보가 넘어옴
        setAccount(res.data.account);
        setTradeHistory(res.data.account[selectedAccount].tradeHistory);
        console.log("Change Account")
      })
      .catch((err) => {
        console.log('AIpage_transhistory_axios_err');
      });
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
      />
    </div>
  ));

  let accountSelctor;
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
  accountSelctor = setAccountSelector();

  const selectingAccount = (e) => {
    setSelectedAccount(e.target.value);
  };
  return (
    <StyledHistoryContainer className="HistoryContainer">
      <StyledSelectBox className="accountSelector">
        <StyledSelect onChange={selectingAccount} value={selectedAccount}>
          {accountSelctor}
        </StyledSelect>
      </StyledSelectBox>
      <StyledScrollArea className="container">
        {holdingRecords}
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

const StyledType = styled.strong`
  color: red;
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
