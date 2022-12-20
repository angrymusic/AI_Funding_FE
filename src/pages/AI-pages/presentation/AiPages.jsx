import styled from 'styled-components';
import { useState, useEffect } from 'react';
import IntroAi from './tabs/IntroAi';
import CurrentStock from './tabs/CurrentStocks';
import TransHistory from './tabs/TransHistory';
import ErrorPage from '../../../common/ErrorPage';
import LoadingPage from '../../../common/Loading';
import axios from 'axios';

export default function AiPages() {
  const [SelectedTab, SelectTab] = useState(0);
  const [currentStock, setCurrentStock] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [networkdError, setNetworkError] = useState(false);
  const [loading, setLoading] = useState(true);
  const obj = {
    0: <IntroAi />,
    1: <CurrentStock data={currentStock} />,
    2: <TransHistory data={tradeHistory} />,
  };

  useEffect(() => {
    axios //  address + /api/ai-page
      .post(`${process.env.REACT_APP_API}`, {
        // .post('http://localhost:8060/', {
        customer_info_id: 1,
        login_type: '00',
      })
      .then((res) => {
        //res로 백에서 데이터 정보가 넘어옴
        setCurrentStock(res.data.currentStock);
        setTradeHistory(res.data.tradeHistory);
        console.log('Get currentStocks & tradeHistory Info');
        setLoading(false);
      })
      .catch((err) => {
        console.log('AIpage_axios_err');
        setNetworkError(true);
      });
  }, []);
  if (networkdError === true) {
    return <ErrorPage msg="인터넷 연결을 확인해주세요!" />;
  } else if (loading === true) {
    return <LoadingPage />;
  }
  return (
    <StyledAiPages className="ai-page-container">
      <StyledTabs className="tabs">
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 0 ? 'selected' : 'notselectedLeft'}
            onClick={() => SelectTab(0)}
          >
            <StyledBottomBar className={SelectedTab === 0 ? 'selected' : 'notselectedLeft'}>
              AI 소개
            </StyledBottomBar>
          </StyledTabButton>
        </StyledTab>
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 1 ? 'selected' : 'notselected'}
            onClick={() => SelectTab(1)}
          >
            <StyledBottomBar className={SelectedTab === 1 ? 'selected' : 'notselectedLeft'}>
              현재 종목
            </StyledBottomBar>
          </StyledTabButton>
        </StyledTab>
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 2 ? 'selected' : 'notselectedRight'}
            onClick={() => SelectTab(2)}
          >
            <StyledBottomBar className={SelectedTab === 2 ? 'selected' : 'notselectedLeft'}>
              거래 내역
            </StyledBottomBar>
          </StyledTabButton>
        </StyledTab>
      </StyledTabs>
      <StyledContent className="contents">{obj[SelectedTab]}</StyledContent>
    </StyledAiPages>
  );
}
const StyledAiPages = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const StyledTabs = styled.div`
  flex: 1;
  display: flex;
  background: rgb(32, 32, 32);
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 34%;
`;

const StyledTabButton = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
      font-weight:bold;
      
      border-right: 2px solid rgb(152, 128, 101);
      border-left: 2px solid rgb(152, 128, 101);
      border-top: 2px solid rgb(152, 128, 101);
      border-radius:15px 15px 0px 0px;
      `;
    } else if (props.className === 'notselectedLeft') {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      
      `;
    } else if (props.className === 'notselectedRight') {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      
      `;
    } else {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      `;
    }
  }};
`;
const StyledBottomBar = styled.div`
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
    font-weight:bold;
    border-bottom: 2px solid rgb(152, 128, 101);
    margin-right: 15px;
    margin-left: 15px;
    `;
    } else {
      return `color: rgb(119, 119, 119);
    border-bottom: none;
    `;
    }
  }};
`;
const StyledContent = styled.div`
  flex: 20;
  display: flex;
  background: black;
  flex-direction: column;
`;
