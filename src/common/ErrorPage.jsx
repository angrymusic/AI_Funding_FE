import React from 'react';
import styled from 'styled-components';

export default function ErrorPage(props) {
  return (
    <ErrorContainer>
      <p style={{ fontSize: '50px', margin: '0' }}>😢</p>
      <p style={{ margin: '0' }}>{props.msg}</p>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
`;
