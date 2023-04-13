  import './style/components/App.css';
  import {BrowserRouter,Routes,Route} from "react-router-dom";
  import React from 'react';
  import Home from './pages/Home';
  import About from './pages/About';
  import Page404 from './pages/Page404';
  import Fiche from './pages/Fiche';


    const App = () => {
      return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/FicheLogement/:id" element={<Fiche/>} />
      <Route path='*' element={<Page404 />} />
    </Routes>
    </BrowserRouter>   
  );
}

export default App;
