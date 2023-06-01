// import { useState } from 'react'
import './App.css'
import Accueil from './components/accueil/Accueil';
import Footer from './components/footer/Footer';
import Header from './components/my-header/Header.jsx';

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Accueil/>
      
      <Footer/>
    </>
  )
}

export default App
