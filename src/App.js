import './App.css';
import React from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import Todo from './components/Todo';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
       <Router>
        <Switch>
          <Route exact path="/"  component={Login}></Route>
          <Route path="/sign-up" component={Registration}></Route>
          <Route path="/"  component={Todo}></Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
