import styled from 'styled-components';

// 레이아웃 컴포넌트
export default function BackgroundLayout({ className, children }) {
  return <Back className={className}>{children}</Back>;
}

// 페이지 컴포넌트는 flex-grow: 1 설정을 주셔야 빈 화면에 맞춰 크기가 채워집니다.
const Back = styled.div`
  background-color: rgb(32, 32, 32);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
