import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">

       <Switch>
         <Route path="/checkout">
           <h1>CheckOut</h1>
         </Route>
         <Route path="/login">
           <h1>Login Page</h1>
         </Route>
         <Route path="/">
           <Header/>
           <h1>Home Page</h1>
         </Route>
       </Switch>

      

      {/* <h1>hegegege</h1> */}
    </div>

     </Router>
  );
}

export default App;
