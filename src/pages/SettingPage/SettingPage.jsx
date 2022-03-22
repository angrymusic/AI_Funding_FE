import styled from 'styled-components';
import { useState } from 'react';
import AccountsSetting from './AccountsSetting'
import AppInfo from './AccountsSetting'

const obj = {
  0: <AccountsSetting />,
  1: <AppInfo />,
};

export default function SettingPage() {
  const [SelectedTab, SelectTab] = useState(0);
  return (
    <StyledAiPages className="ai-page-container">
      <StyledSearchBar className="tabs">
        <StyledSearchButton type="text" placeholder = "검색"></StyledSearchButton>
      </StyledSearchBar>
      
      <StyledContent className="contents">{obj[SelectedTab]}</StyledContent>
    </StyledAiPages>
  );
}
const StyledAiPages = styled.div`
  height: 100%;
`;
const StyledSearchBar = styled.div`
  display: flex;
  width: 100%;
  /* 세로길이 설정 */
  height: 60px;
  padding-top:15px;
  
`;

const StyledSearchButton = styled.input`
  border: none;
  border-radius: 10px / 10px;
  background-color: rgb(119, 119, 119); 
  color: white;
  type="text"
  placeholder = "검색"
  margin-top: 20px;
  width: 90%;
  height:30px;
  position: relative;
  
`;


const StyledContent = styled.div``;
