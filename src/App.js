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
      <div className='row'>
        <Page photos={page.photos} year={page.year} setYear={setYear} />
        <User name={user.name} />
      </div>
    </div>
  )
}

export default App;
