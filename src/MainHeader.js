import React from 'react';
import { useLocation } from 'react-router-dom';

const MainHeader = props => {
  const location = useLocation(); 
  console.log(location.pathname)
  return (
    <div className="mb-4">
      {/* <button onClick={() => { props.history.push('/') }}>Home</button>
      <button onClick={() => { props.history.push('/users') }}>User</button>
      <button onClick={() => { props.history.push('/contact') }}>Contact</button> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">ByTheirTweets</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={location.pathname !== '/' ? 'nav-item' : 'nav-item active'}>
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className={location.pathname !== '/contact' ? 'nav-item' : 'nav-item active'}>
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className={location.pathname !== '/users' ? 'nav-item' : 'nav-item active'}>
              <a className="nav-link" href="/users">Users</a>
            </li>
            <li className={!location.pathname.includes('/person/') ? 'nav-item' : 'nav-item active'}>
              <a className="nav-link" href="/person">Person</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default  MainHeader