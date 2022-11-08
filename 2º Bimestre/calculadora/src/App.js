import './App.css';

function App() {
  return (
    <div className = 'app'>
      <div className ='row-display'>
        <div className='display'>0</div>
      </div>
      <div className ='rows'>
        <div className='button button-light'>AC</div>
        <div className='button button-light'>+/-</div>
        <div className='button button-light'>%</div>
        <div className='button button-operation'>/</div>
      </div>
      <div className ='rows'>
        <div className='button'>7</div>
        <div className='button'>8</div>
        <div className='button'>9</div>
        <div className='button button-operation'>X</div>
      </div>
      <div className ='rows'>
        <div className='button'>4</div>
        <div className='button'>5</div>
        <div className='button'>6</div>
        <div className='button button-operation'>-</div>
      </div>
      <div className ='rows'>
        <div className='button'>1</div>
        <div className='button'>2</div>
        <div className='button'>3</div>
        <div className='button button-operation'>+</div>
      </div>
      <div className ='rows'>
        <div className='button-large'>0</div>
        <div className='button'>,</div>
        <div className='button button-operation'>=</div>
      </div>
    </div>

  );
}

export default App;
