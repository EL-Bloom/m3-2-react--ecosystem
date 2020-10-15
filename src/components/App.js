import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,  
  Route, 
  Link, 
  // useParams
} from "react-router-dom" 
import styled from "styled-components";
import Home from "./Home" 
// import Header from "./Header"; 
import About from "./About";
 


const Header = styled.header`
  display:flex;  
  justify-content: space-between;

`;
const List = styled.li`
 margin:10px;
`; 
const UL = styled.ul` 

  list-style-type:none; 
  display:flex; 
  justify-items:flex-end; 

`;  




const App = (props) => {
  return ( 
   
    <Router> 
         <div>
     <Header>  
      <h1>Fruit Emporium</h1>
        <UL>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/About">About</Link>
          </List> 
          </UL>
           </Header> 
 
        <Switch> 
          <Route exact path="/"> 
          <Home /> 
          </Route> 
          <Route path="/About"> 
           <About />
           </Route>
        </Switch> 

        </div>
   </Router>
     )
   
  
};  

export default App;
