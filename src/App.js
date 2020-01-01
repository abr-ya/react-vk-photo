import React from 'react';
import './App.scss';

import {User} from './components/User'
import {Page} from './components/Page'

const App = ({user, page, setYear}) => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото !!</h1>
      </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYear} />
      <hr/>
    </div>
  )
}

export default App;
