import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: rgb(72,45,24);
  padding: 20px;
  color: white;
  font-family: Anton;
  letter-spacing: 2px;
  font-size: 35px;
  text-align: center;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100px; 
`;

const MenuBar = styled.div`
  background-color: rgb(13,46,59);
  color: white;
  display: flex;
  justify-content: space-around;
  position: relative;
  font-size: 20px;
  font-weight: bold;
`;

const MenuItem = styled.div`
  padding: 10px;
`;

const Menu = styled.div`
  background-color: rgb(13,46,59);
  color: white;
  position: relative;  
  height: ${props => props.open ? '200px' : '0'};
  overflow: hidden; 
  left: 0;
  right: 0;
  font-size: 15px;
  transition: height 0.5s ease-in-out; 
`;


const Tab = ({ title, children, open }) => {
  return (
    <div>
      <MenuItem>{title}</MenuItem>
      <Menu open={open}>{children}</Menu>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <StyledDiv>
        <h1>APPLES</h1>
      </StyledDiv>
      <MenuBar onMouseOver={() => setMenuOpen(true)} onMouseOut={() => setMenuOpen(false)}>
        <Tab title="공지" open={menuOpen}>
          <p>공지 내용</p>
        </Tab>
        <Tab title="학회소개" open={menuOpen}>
          <p>학회소개 내용</p>
        </Tab>
        <Tab title="회원메뉴" open={menuOpen}>
          <p>회원메뉴 내용</p>
        </Tab>
        <Tab title="커뮤니티" open={menuOpen}>
          <p>커뮤니티 내용</p>
        </Tab>
      </MenuBar>
    </div>
  );
}

export default App;
