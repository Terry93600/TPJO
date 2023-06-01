// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Accueil from './components/accueil/Accueil';
import CallSport from './components/callSport';
import Footer from './components/footer/Footer';
import Header from './components/my-header/Header.jsx';
import Sports from './components/sports/Sports';

// import router from './service/Router'


function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* les element suivant seront presents dans toutes les routes */}
      <Header/>
      <Accueil/>
      <Sports/>
      <Footer />
      
      {/* ici on a creer la route et son chemin pour acceder aux donnees du backend qu'on a stocker dans un fichier React et qu'on importe ici :  */}
      <Routes>
        <Route path="/" element={<CallSport/> } />
     </Routes>
      
    </>
  )
}

export default App
