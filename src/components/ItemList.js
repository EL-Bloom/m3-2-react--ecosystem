import React from "react";
import styled from "styled-components";  
import PropTypes from "prop-types";
import { Link } from "react-router-dom";  

function ItemList (item) {

    return ( 
    
       <FruitDiv key={item.id}>  
     <Link to ={item.id}>
      <FruitImage src={item.imageSrc}></FruitImage>
      <FruitName>{item.name}</FruitName>  
      <FruitLatinName>{item.latinName}</FruitLatinName>
      </Link>
    </FruitDiv> 
   
    );
  }

const FruitDiv = styled.div` 
width:300px;  
padding:10px;  
text-align:center;   
border: 2px solid lightgray; 
border-radius: 10px;

`; 

const FruitName = styled.h2` 
color:black;
`; 
const FruitImage = styled.img`  
height:200px;  
border-radius:20px;

`;
const FruitLatinName = styled.h4`  
color:black;
`;
export default ItemList;