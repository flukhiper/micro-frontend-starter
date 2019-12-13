import React from 'react';

import './App.css';
import MicroWrapper from './components/MicroWrapper'

const onClickMe = (e) => {
  console.log('MicroA send me message,',e.detail)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Warpper said: Hello world. I am Wrapper</h1>
        <h2>◊ Welcome to micro-frontend workshop ◊</h2>
        <div>
          <MicroWrapper name="MicroA" onClickMe={onClickMe}>
            <micro-a></micro-a>
          </MicroWrapper>
          <MicroWrapper>
            <micro-b></micro-b>
          </MicroWrapper>
        </div>
      </header>
    </div>
  );
}

export default App;
