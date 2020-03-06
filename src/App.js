import React from 'react';
import './App.css';

const App = () => {
  return (
      <div className='app-wrapper'>
          <header className='header'>
              <img src="./img/logo.png" alt="logo" />
          </header>
          <nav className='nav'>
              <div>
                  <a>Profile</a>
              </div>
              <div>
                  <a>Message</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Music</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>
          </nav>
          <div className='content'>
              <div>
                  <img src="./img/cosmos.jpg" alt="cosmos"/>
              </div>
              <div>
                  ava + description
              </div>
              <div>
                  my posts
                  <div>
                      new post
                  </div>
              </div>
              <div>
                  <div>post 1</div>
                  <div>post 2</div>
              </div>
          </div>
      </div>


  );
}

export default App;
