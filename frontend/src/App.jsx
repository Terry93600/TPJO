// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Accueil from './components/accueil/Accueil';
// import Footer from './components/footer/Footer';
// import Header from './components/my-header/Header.jsx';
// import Sports from './components/sports/Sports';
// import SportsPage from './components/sportsPage/SportsPage';
import Accueil from "./Page/Accueil";
import Sportive from './Page/Sportive';




// import router from './service/Router'


function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sports" element={<Sportive />} />
        {/* <Route path="/sports" element={<SportsPage/> } /> */}
     </Routes>
      
    </>
  )
}

export default App
