import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from './Conteiners/Home/Home';
// import Movie from './Conteiners/Movie/Movie';
// import SingleUser from './Components/SingleMovie/SingleMovie';
// import Genres from './Conteiners/Genres/Genres';
// import Person from './Conteiners/Person/Person'
const Home = lazy(() => import('./Conteiners/Home/Home'))
const Movie = lazy(() => import('./Conteiners/Movie/Movie'))
const SingleUser = lazy(() => import('./Components/SingleMovie/SingleMovie'))
const Genres = lazy(() => import('./Conteiners/Genres/Genres'))
const Person = lazy(() => import('./Conteiners/Person/Person'))
const SinglePersone = lazy(() => import('./Components/SinglePersone/SinglePersone'))
const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/movie' component={Movie}></Route>
          <Route path='/movie/:name' component={SingleUser}></Route>
          <Route exact path='/genre' component={Genres}></Route>
          <Route exact path='/person' component={Person}></Route>
          <Route path='/person/:name' component={SinglePersone}></Route>
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;