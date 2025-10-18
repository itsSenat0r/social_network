import { useState } from 'react';
import BottomBar from './components/BottomBar';
import MainContainer from './components/MainContainer';
import TopBar from './components/TopBar';
import './App.css';
import './components/styles/fonts.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='MainFrame_Container'>
        <div className='MainFrame'>
          <TopBar/>
          <MainContainer/>
          <BottomBar/>
        </div>
      </div>
    </>
  )
}

export default App
