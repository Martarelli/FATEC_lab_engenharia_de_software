import { useState } from 'react';
import './App.css';
import Square from './Components/Square';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <div className='board'>
        <div className='row'><Square val={} chooseSquare={}/></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
