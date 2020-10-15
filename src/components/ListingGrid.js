import React from "react";
import ItemList from "./ItemList";
import PropTypes from "prop-types"; 
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 

const ListingGrid = ({ itemArray }) => {
  let output = itemArray.map((item) => {
    return (<Wrapper>  
     
      <Div key={item.id}>{ItemList(item)}</Div> 
      </Wrapper>);
  });
  return output;
};
 


ListingGrid.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
  

const Div = styled.div` 

`;
const Wrapper = styled.div`   
margin:10px;
background-color:white;
`;

export default ListingGrid;
