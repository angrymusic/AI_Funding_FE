import styled from 'styled-components';
import { useState } from 'react';
import CheckProfit from './CheckProfit';
import CompareProfit from './CompareProfit';


const obj = {
  0: <CheckProfit />,
  1: <CompareProfit />,
};

export default function AccountPage() {
  const [SelectedTab, SelectTab] = useState(0);
  return (
    <StyledAccountPage className="account_page">
      <StyledTabs className="tabs">
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 0 ? 'selected' : 'notselected'}
            onClick={() => SelectTab(0)}
          >
            수익 확인
          </StyledTabButton>
        </StyledTab>
        <StyledTab>
          <StyledTabButton
            className={SelectedTab === 1 ? 'selected' : 'notselected'}
            onClick={() => SelectTab(1)}
          >
            수익 비교
          </StyledTabButton>
        </StyledTab>
      </StyledTabs>
      <StyledContent className="contents">{obj[SelectedTab]}</StyledContent>
    </StyledAccountPage>
  );
}

const StyledAccountPage = styled.div`
  height: 100%;
`;
const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: black;
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 50%;
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
    } else if (props.className === 'notselected') {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      
      `;
    }  else {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      `;
    }
  }};
`;

const StyledContent = styled.div``;