import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Comment from './Component/Comment';
import { useState } from 'react';
/*

게시글 선택 시 게시글 내용 보여주는 컴포넌트 모음

이전 버튼
글 내용
댓글
댓글 작성 (미완)
삭제 버튼 (미완)

*/

export default function Read(props){

  const navigate=useNavigate();

  const [wrComment,setWrComment]=useState('')

  const [heart,setHeart]=useState('unclicked');

  const Clicked = () => {

    if(heart==='unclicked'){
      setHeart('clicked')
    }
    else
    {  setHeart('unclicked')}
   
    console.log(heart)
  }

  //댓글 출력 함수
  const PrintComment = () =>{
    const result = [];
    for (let j=0; j< 10;j++){
      result.push(
        <Comment />
      );
    }

    return result;
  }

  const onChange = (e) => {
    setWrComment(e.target.value);
  };

  const onClick = () => {
    if(wrComment===''){
      alert('내용을 입력해주세요.');
      return;
    }

    console.log('댓글: ',wrComment);
    setWrComment('');
  }

  return (
      <StyledLogContainer>
        <StyledTab>
        <StyledTitle>
          <DisplayFlex>
        <PreviousButton onClick = {()=> navigate(-1)}>
          <WhiteText>◀ 이전</WhiteText>
        </PreviousButton>
        <CenterTitle>
        읽기{props.selectedClass}</CenterTitle>
        </DisplayFlex>
      </StyledTitle>
        </StyledTab>
 <StyledTab>
  <BoardContentTab>
        <DisplayFlex>
        <GoldText>😀</GoldText>&nbsp;<WhiteText>이름</WhiteText>
        </DisplayFlex>
        <DisplayFlex>
          <ContentTab>
        <WhiteText>
          내용
          </WhiteText>
          </ContentTab>
        </DisplayFlex>
        <BottomTab>
        {heart==='clicked' ? <Like onClick={Clicked}>♥</Like> : <Like onClick={Clicked}>♡</Like>}<CommentStyle>💬 댓글수</CommentStyle>
        </BottomTab>
      </BoardContentTab>
</StyledTab>
    <ScrCon>
    <ScrTab>{PrintComment()}</ScrTab>
    <WrCommentCon>
    <input 
          name="Comment"
          value={wrComment}
          type="text"
          maxLength='50'
          onChange={onChange}
          style={{
            background:"rgb(32, 32, 32)",
            width:"87%",
            margin:"10px",
            borderBottom:"0px",
            borderRight:"0px",
            padding:"5px",
            color:"rgb(204, 204, 204)",
            fontSize:"14px",
          }}>
          </input>
          <div onClick={onClick} 
          style={{color:"white",textAlign:"center", position:'absolute', right:'10px', bottom:"15px"}}>
            확인</div>
          </WrCommentCon>
          </ScrCon>
      </StyledLogContainer>
    );
};

//스크롤 페이지 컨테이너
const ScrCon = styled.div`
height: calc(100% );
padding:5px;
position:relative;
`;

//스크롤 탭
const ScrTab = styled.div`
overflow:auto;
height:100%;
width: 100%;
`;

const WrCommentCon = styled.div`
  border-right: 1px solid rgb(152, 128, 101);
  border-left: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(152, 128, 101);
  border-radius:5px 5px 5px 5px;
  border-bottom: 1px solid rgb(152, 128, 101);
  position:relative;
`;

//가장 큰 컨테이너의 position을 fixed 해준뒤 width와 height를 100% 설정해주면 
//스크롤에서도 calc 사용가능
const StyledLogContainer = styled.div`
position:fixed;
width:100%;    
height:calc(100% - 510px);
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 100%;
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
`;

//게시글 내용 레이아웃
const BoardContentTab = styled.div`
  width:96%;
  height:320px;
  margin-left:2%;
  padding:5px;
  border-right: 1px solid rgb(152, 128, 101);
  border-left: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(152, 128, 101);
  border-radius:5px 5px 5px 5px;
  border-bottom: 1px solid rgb(152, 128, 101);
`;

//게시글 내용 스크롤 탭
const ContentTab = styled.div`
  height:240px;
  overflow:scroll;
`;

//하얀글자 스타일
const WhiteText = styled.div`
  color:white;
  font-size:14px;
`;

//금색글자 스타일
const GoldText =styled.div`
font-size: 14px;
color: rgb(152, 128, 101);
`;

//이전 버튼
const PreviousButton = styled.div`
  margin-left:13px;
`;

//좋아요
const Like =styled.div`
  color:#ED6A60;
  margin-left:auto;  
`; //margin-left:auto; 로 우측정렬

//말풍선
const CommentStyle = styled.div`
  color:#61C454;
  margin-left:5px;
`;

//인기게시글, 게시글내용 좋아요,댓글 레이아웃
const BottomTab = styled.div`
margin-top:20px;
display:flex;
width:100%;
font-size:15px;
`;

const StyledTitle = styled.div`
  line-height: 45px;
  font-size: 18px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101); 
`;

const CenterTitle=styled.div`
   margin-left:calc((100% - 144px) / 2 );
`;