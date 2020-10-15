import React from "react"; 
import styled from "styled-components";   
import {items} from "../data"; 
import ListingGrid from "./ListingGrid"; 
import ItemList from "./ItemList";
// let item = Object.values(items); 
// let name = item.name;


function Home() { 
 
  return (
    <div>
      <h2>Home</h2> 
      <p>Fruit emporium sells the finest fruits from this world and beyond.

Browse items:</p> 
    <MainDiv> 
   <ListingGrid itemArray={Object.values(items)} />
    </MainDiv>


    </div>
  );
}    
const MainDiv = styled.div` 
display:flex;    
justify-content:center;
flex-wrap: wrap; 
max-width:100vw; 
background-color: #f2f2f2;  
border-top: 2px solid lightgray;
`;
   
  export default  Home;