import styled from 'styled-components';
import { useState } from 'react';
import IntroAi from './tabs/IntroAi';
import CurrentStuck from './tabs/CurrentStuck';
import TransHistory from './tabs/TransHistory';

const obj = {
  0: <IntroAi />,
  1: <CurrentStuck />,
  2: <TransHistory />,
};

export default function AiPages() {
  const [SelectedTab, SelectTab] = useState(0);
  return (
    <StyledAiPages className="ai-page-container">
      <StyledTabs className="tabs">
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 0 ? 'selected' : 'notselectedLeft'}
            onClick={() => SelectTab(0)}
          >
            AI 소개
          </StyledTabButton>
        </StyledTab>
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 1 ? 'selected' : 'notselected'}
            onClick={() => SelectTab(1)}
          >
            현재 종목
          </StyledTabButton>
        </StyledTab>
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 2 ? 'selected' : 'notselectedRight'}
            onClick={() => SelectTab(2)}
          >
            거래 내역
          </StyledTabButton>
        </StyledTab>
      </StyledTabs>

      <StyledContent className="contents">{obj[SelectedTab]}</StyledContent>
    </StyledAiPages>
  );
}

const StyledAiPages = styled.div`
  height: 100%;
`;
const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  /* 세로길이 설정 */
  height: 60px;
  background: black;
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

const StyledContent = styled.div``;
