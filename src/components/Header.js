import React from "react"; 
import styled from "styled-components";  
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <NavBar>
                <Title>Fruit Emporium</Title>
            <NavLinks>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>          
            </NavLinks>            
            </NavBar>
        </header>
    );
}


const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavLinks = styled.div`

`; 
const Title = styled.h1`
    color: black;
   
`; 
const StyledLink = styled(Link)`
  color: #4350e0;
  font-weight: bold;
  font-size: 16px;
  display: inline;
  margin-left: 1rem;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
    color: #cc43a1;
  }
  &.active {
    color: red;
  }
`;


export default Header;