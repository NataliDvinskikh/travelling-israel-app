
import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

const [point, setPoint] = useState(0);
const {id, place, image} = data[point];

const previousPoint = () => {
  setPoint((point => {
    point --;
    if(point<0) {
      point =  data.length-1;
    }
    return point
  }))
}

const nextPoint = () => {
      setPoint((point =>{
        point++;
        if(point>data.length - 1) {
          point = 0;
        }
          return point;
      }))
}

  return (
    <div>
      <div className='container'>
        <h1>Amazing places in Israel</h1>
      </div>
      <div className='container'>
        <img src={image} width="300px" alt ="place"/>
      </div>
      <div className='container'>
        <h2>{id} - {place}</h2>
      </div>
      <div className='btn container'>
        <button onClick={previousPoint}>Previous</button>
        <button onClick={nextPoint}>Next</button>
      </div>
    </div>
  );
}

export default App;
