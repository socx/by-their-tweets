import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import Users from './users'
import Contact from './contact'
import MainHeader from './MainHeader';
import PersonOfInterest from './PersonOfInterest';
import Tweets from './Tweets';


function App() {
  return (
    <>
      <MainHeader/>
      <div>
        <Route exact path='/' component={Search} />
        <Route path='/about' component={Contact} />
        <Route path='/contact' component={Contact} />
        <Route path='/faq' component={Contact} />
        <Route exact path='/users' component={Users} />
        <Route path='/users/:id' component={Users} />
        <Route path='/people/:personId' component={PersonOfInterest} />
        <Route path='/tweets/:personId/:categoryId' component={Tweets} />
        <Route path='/search' component={Search} />
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">ByTheirTweets</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="py-5">
        <Search/>
      </div> */}
    </>
  );
}

export default App;
