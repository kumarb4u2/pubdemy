import React from 'react';
import styled from 'styled-components';
import RightMenu from '../components/molecules/rightmenunav';

const Container = styled.header`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid grey;
  align-items: center;
  padding: 5px 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: baseline;
  }
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  position: relative;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const SearchIcon = styled.i`
  position: absolute;
  left: 40px;
  top: 15px;
`;

const Search = styled.input`
  padding: 15px 10px 15px 50px;
  border-radius: 40px;
  width: 450px;
  margin-left: 20px;
  border-color: grey;
`;

const MenuIcon = styled.i`
  font-size: 1.2em;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <MenuIcon className="fa-solid fa-bars"></MenuIcon>
      <Logo>Pubdemy</Logo>
      <SearchContainer>
        <Search type="text" placeholder="Search for anything" />
        <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
      </SearchContainer>
      <RightMenu></RightMenu>
    </Container>
  );
};
