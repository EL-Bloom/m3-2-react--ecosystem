import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,  
  Route, 
  Link, 
  // useParams
} from "react-router-dom" 
import styled from "styled-components";
// import Home from "./Home" 
import Header from "./Header"; 
// import About from "./About";


const list = styled.li`
 margin:10px;
`; 
const UL = styled.ul`
  list-style-type:none; 
  display:flex; 
  justify-content:flex-end; 

`; 



const App = (props) => {
  return ( 
   
    <Router> 
         <div>
     <header>  
  
        <UL>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li> 
          </UL>
       
           </header> 

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

function Home() {
  return (
    <div>
      <h2>Home</h2> 
      <p>Fruit emporium sells the finest fruits from this world and beyond.

Browse items:</p>
    </div>
  );
}     


function About() {
  return (
    <div>
      <h2>About</h2> 
      <p>Fruit emporium is founded on a very simple principle: Fruit is good.

We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
    </div>
  );
}  


export default App;
