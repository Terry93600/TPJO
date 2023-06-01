// import { useState } from 'react'
import './App.css'
import Accueil from './components/accueil/Accueil';
import Header from './components/my-header/Header.jsx';
import Sports from './components/sports/Sports';

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Accueil/>
      <Sports/>
      
    </>
  )
}

export default App
