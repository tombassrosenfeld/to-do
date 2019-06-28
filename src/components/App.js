import React from 'react';
import Header from './Header'
import Board from "./Board"

import '../styles/index.scss';

function App() {
  return (
    <div className="App container">
      <Header/>
      
      <Board
      	boardIndex = {1}
       />

        
    </div>
  );
}

export default App;
