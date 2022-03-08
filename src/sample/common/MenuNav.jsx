import React, { useState } from 'react';
import './FontAwesome';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MenuNav = () => {
  const [selected, select] = useState(1);
  return (
    <StyledMenubar className="Menu_bar">
      <StyledMenuButton to="/" className="Menu_button" onClick={() => select(1)}>
        <StyledIcon
          icon="fa-solid fa-house"
          className={selected === 1 ? 'selected' : 'notselected'}
        />
      </StyledMenuButton>
      <StyledMenuButton to="/second" className="Menu_button" onClick={() => select(2)}>
        <StyledIcon
          icon="fa-solid fa-comments"
          className={selected === 2 ? 'selected' : 'notselected'}
        />
      </StyledMenuButton>
      <StyledMenuButton to="/third" className="Menu_button" onClick={() => select(3)}>
        <StyledIcon
          icon="fa-solid fa-gear"
          className={selected === 3 ? 'selected' : 'notselected'}
        />
      </StyledMenuButton>
      <StyledMenuButton to="/fourth" className="Menu_button" onClick={() => select(4)}>
        <StyledIcon
          icon="fa-solid fa-comments"
          className={selected === 4 ? 'selected' : 'notselected'}
        />
      </StyledMenuButton>
      <StyledMenuButton to="/fifth" className="Menu_button" onClick={() => select(5)}>
        <StyledIcon
          icon="fa-solid fa-gear"
          className={selected === 5 ? 'selected' : 'notselected'}
        />
      </StyledMenuButton>
    </StyledMenubar>
  );
};

export default MenuNav;

const StyledMenubar = styled.nav`
  overflow: hidden;
  height: 70px;
  border-top: 2px solid rgb(184, 168, 142);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledMenuButton = styled(Link)`
  text-align: center;
  float: left;
  width: 20%;

  /* 세로길이 설정 */
  height: 100%;
  line-height: 45px;
  background: black;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  ${(props) => {
    return props.className === 'selected'
      ? `color: rgb(184, 168, 142)`
      : `color: rgb(119, 119, 119)`;
  }};
`;
