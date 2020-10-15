import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,  
  Route, 
  Link, 
  useParams
} from "react-router-dom" 
import styled from "styled-components";
import Home from "./Home" 
import Header from "./Header"; 
import About from "./About";
import GlobalStyles from "./GlobalStyle"; 
import ItemDetails from "./ItemDetails";
 
function ItemPost() {
  let { itemId } = useParams()
  return <ItemDetails itemId={itemId}/>
}





const App = (props) => {
  return ( 
   
    <Router> 
         <div>
     <Header /> 
        <Switch> 
          <Route exact path="/"> 
          <Home /> 
          </Route> 
          <Route path="/About"> 
           <About />
           </Route> 
           <Route path="/:itemId">
              <ItemPost />
             </Route> 
        </Switch> 

        </div> 
        <GlobalStyles />
   </Router>
     )
   
  
};  

export default App;
