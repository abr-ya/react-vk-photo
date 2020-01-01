import React from 'react';
import './App.scss';

const App = (props) => {
  const {
    add,
    addNum,
    counter
  } = props;

  return (
    <div className="App">
      <h1>Управляем числом: {counter}</h1>

      <hr/>

      <div className="Actions">
        <button onClick={add}>Добавить 1</button>
        <button onClick={() => {addNum(10)}}>Добавить 10</button>
      </div>
    </div>
  )
}

export default App;
