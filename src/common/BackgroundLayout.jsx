import styled from "styled-components";

export default function BackgroundLayout({ className, children }) {
  return <Back className={className}>{children}</Back>;
}

const Back = styled.div`
  background-color: rgb(32, 32, 32);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
