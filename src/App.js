import {useState} from 'react';
import './App.css';

function App() {
  const [number,setnumber] = useState(["#2D7ACF"])
  function genhex(){
    const sizeNum = 6
    let result = []
    let num = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    for(let i = 0; i < sizeNum; i++ ){
      result.push(num[Math.floor(Math.random() * 16)])
    }
    let z = '#' + result.join('')
    return setnumber(z)
  }
  function copycolor(){
    navigator.clipboard.writeText(number)
  }
  return (
    <section className='h-full w-full min-h-screen min-w-screen' style={{backgroundColor : `${number}`}}>
      <div className='grid grid-row-3 place-content-center m-0 h-screen'>
        <h3 className='m-2 text-center text-xl font-bold text-white'>Random Color</h3>
        <h1 className='m-5 mb-8 text-8xl font-bold text-center text-white'>{number}</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={genhex}>Pick the color!</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5' onClick={copycolor}>Copy the color!</button>
      </div>
    </section>
  );
}

export default App;

