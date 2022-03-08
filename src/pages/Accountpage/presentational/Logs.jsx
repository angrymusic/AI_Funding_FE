import styled from "styled-components";

export default function Logs(props) {
  return (
    <StyledLogContainer>
    <StyledLog>
      <StyledDateLog>
       2022-00-00
       <br/>
       2022-00-01
       <br/>
       2022-00-02
       <br/>
       2022-00-03
       <br/>
       2022-00-04
       <br/>
       2022-00-05
       <br/>
       2022-00-06
      </StyledDateLog>

      <StyledProfitLog>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
      </StyledProfitLog>
    </StyledLog>
     </StyledLogContainer>
  );
}

// 기록 날짜
const StyledDateLog = styled.div`
  float: left;
  font-size: 1.2rem;
  padding-top: 20px;
  width: 50%;
  color: gray;
`;

// 기록 
const StyledProfitLog = styled.div`
  float: right;
  font-size: 1.2rem;
  padding-right: 20px;
  padding-top:20px;
  color: white;
`;

const StyledLog = styled.div`
  color: white;
  margin: auto;
  font-size: 16px;
`;

const StyledLogContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;