import React from 'react';
import './App.scss';

import {User} from './components/User';
import {Page} from './components/Page';

const App = ({user, page, photo,
              setYear,
              initAppSagaAction, loginSagaAction,
              loginRequest, loginSuccess, loginFail,
              addPhoto,
            }) => {
  const vkLoginHandler = () => {
    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      loginRequest();
      if (r.session) {
          //console.log(r.session.user);
          let username = r.session.user.first_name;
          let id = r.session.user.id;
          console.log(`Привет, ${username} (${id})!`);
          loginSuccess(username, id);
      } else {
          console.log('Что-то пошло не так!');
          loginFail();
      }
    }, 4); // запрос прав на доступ к photo  
  }

  const getPhotos = (offset) => {
    //eslint-disable-next-line no-undef
    VK.Api.call(
      'photos.getAll',
      { extended: 1, count: 200, offset: offset, v: '5.80' },
      r => {
        //console.log(r.response.items);
        const start = new Date('01.01.2016').getTime() / 1000;
        //console.log('01.01.2017:', start);
        //console.log('полученное:', r.response.items[199].date);
        // если фотографии остались и дата не вылетела
        if (r.response.count > offset + 200 && start < r.response.items[199].date) {
          addPhoto(r.response.items);
          setTimeout(function() {
            getPhotos(offset + 200);
          }, 500);
        } else {
          var filteredPhoto = r.response.items.filter(item => item.date > start);
          //console.log(filteredPhoto);
          addPhoto(filteredPhoto);
        }
      }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Когда не работают "лучшие моменты"!))</h1>
      </header>
      <User vkLoginHandler={vkLoginHandler} name={user.name} isFetching={user.isFetching} error={user.error} />
      <h2>после авторизации нужно нажать на кнопку:</h2>
      {/* <button className='btn' onClick={initAppSagaAction}>initApp</button> */}
      {/* <button className='btn' onClick={vkLoginHandler}>VK Login</button> loginSagaAction */}
      <button className='btn' onClick={() => getPhotos(0)}>загрузить данные о фото!</button>      
      <div className='row'>
        <Page photos={photo.items} year={page.year} setYear={setYear} />
      </div>
    </div>
  )
}

export default App;
