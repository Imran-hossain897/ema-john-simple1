import React from 'react';
import './App.css';
import Header from './comphonent/Header/Header';
import Shop from './comphonent/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './comphonent/Review/Review';
import Inventory from './comphonent/Inventory/Inventory';
import Notfound from './comphonent/NotFound/Notfound';
import Productdetil from './comphonent/Product detail/Productdetil';



function App() {
  return (
    <div >
     <Header></Header>
     <Router>
       <Switch>
         <Route path='/shop'>
         <Shop></Shop>
         </Route>
         <Route path='/review'>
          <Review></Review>
         </Route>
         <Route path='/manage'>
          <Inventory></Inventory>
         </Route>
        <Route exact path='/'>
         <Shop></Shop>
       </Route>
       <Route path="/product/:productKey">
         <Productdetil></Productdetil>
       </Route>
        <Route path='*'>
        <Notfound></Notfound>
       </Route>
       </Switch>
   </Router>
    
    </div>
  );
}

export default App;
