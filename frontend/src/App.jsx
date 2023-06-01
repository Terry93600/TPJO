// import { useState } from 'react'
import './App.css'
import Accueil from './components/accueil/Accueil';
import Bas from './components/Bas/Bas';
import Header from './components/my-header/Header.jsx';

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Accueil/>
      <Bas/>
    </>
  )
}

export default App
