import React from 'react';
// import List from './Components/List/List';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Conteiners/Home/Home';
import Users from './Conteiners/Users/Users';
import Repos from './Conteiners/Repos/Repos';
import SingleUser from './Components/SingleUser/SingleUser';

const App = () => {
  console.log(process.env);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/users' exact component={Users}></Route>
        <Route path='/repos' exact component={Repos}></Route>
        <Route path='/users/:name' component={SingleUser}></Route>
        <Redirect to='/'/>
      </Switch>
      {/* <List /> */}
    </div>
  );
};

export default App;