import styled from 'styled-components';
import {useState} from 'react';
import List from './List';
import HotList from './HotList';
import {Link} from "react-router-dom";
import { getBoard } from '../../../modules/board';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pencilIcon from './img/pencil-solid.svg';

/*

커뮤니티 글목록 리스트

글 종류 구별짓는 네비게이션 바
인기 게시글 (컴포넌트)
게시글 목록 (컴포넌트)

*/



export default function Board(){
    const [selectedTab, selectTab] = useState(0);
    const [selectedClass,selectClass]=useState("공지");

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const TabZero = () =>{
      selectTab(0)
      selectClass("공지");
      axios
        .post(`http://localhost:8080/`, {
            customer_info_id: 1,
            loginType: '00',
        })
        .then((res) => {
          dispatch(getBoard(res.data));
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
    const TabOne = () =>{
      selectTab(1)
      selectClass("주식");

      axios
        .post(`http://localhost:8080/`, {
          customer_info_id: 1,
          login_type: '00',
        })
        .then((res) => {
          console.log(res.data);
          dispatch(getBoard(res.data));
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
    const TabTwo = () =>{
      selectTab(2)
      selectClass("잡담");
      
    }
    const TabThree = () =>{
      selectTab(3)
      selectClass("내가 쓴 글");
      
    }
    const TabFour = () =>{
      selectTab(4)
      selectClass("스크랩");
     
    }

    //게시물 목록 출력 함수
    const PrintBoardList = () =>{
      const result = [];
      for (let i=0; i< 10;i++){
        result.push(
        <Link to="Read/1" key={i} style={{ textDecoration: 'none' }}>
        <List 
            title={selectClass} 
        /></Link>
        );
      }

      return result;
    }

    return(
      <StyledCommunityPage className="Board_page">
        <StyledTabs>
     <StyledTab>
      <StyledTitle>
        커뮤니티
      </StyledTitle>
      </StyledTab>
      </StyledTabs>
      <DisplayFlex>
          <StyledTabButton
        className={selectedTab === 0 ? 'selected' : 'notselected'}
        onClick={TabZero}
      >
        공지
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
          <StyledTabButton
        className={selectedTab === 1 ? 'selected' : 'notselected'}
        onClick={TabOne}
      >
        주식
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={selectedTab === 2 ? 'selected' : 'notselected'}
        onClick={TabTwo}
      >
        잡담
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={selectedTab === 3 ? 'selected' : 'notselected'}
        onClick={TabThree}
      >
        내가 쓴 글
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={selectedTab === 4 ? 'selected' : 'notselected'}
        onClick={TabFour}
      >
        스크랩
      </StyledTabButton>
      </DisplayFlex>
      <Link to="Read/1" style={{ textDecoration: 'none' }}>
      <HotList selectedClass={selectedClass} /></Link>
       <ScrCon>
       <ScrTab>{PrintBoardList()}</ScrTab>
        <Link to="Write" state={selectedClass} ><div style={{ marginLeft:'80%', position:'absolute', right:'50px', bottom:'50px' }}><div style={{display:'flex',justifyContent:'center', width:'80px', height:'80px', background: 'rgb(152, 128, 101)', borderRadius:'50%'}}><img src={pencilIcon} alt="글작성" style={{width:'50px'}}></img></div></div></Link>
        </ScrCon>
</StyledCommunityPage>
    );
}

const ScrCon = styled.div`
height: calc(100% ); 
position:relative;
`;


const StyledCommunityPage = styled.div`
position:fixed;
width:100%;    
height:calc(100% - 260px); 
`;

const DivisionTab = styled.div`
line-height: 45px;
color: rgb(119, 119, 119);
font-size: 14px;
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
`;

const StyledTabButton = styled.div`
  line-height: 45px;
  font-size: 14px;
  margin-left:14px;
  margin-right:14px;
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
      `;
    } else if (props.className === 'notselected') {
      return `color: rgb(119, 119, 119);
      
      `;
    }  else {
      return `color: rgb(119, 119, 119);
      `;
    }
  }};
`;

const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: rgb(32, 32, 32);
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101);
`;

const ScrTab = styled.div`
overflow:auto;
height:100%;
width:100%;
`;