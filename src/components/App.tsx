import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import BlockBuster from './pages/BlockBuster/BlockBuster';
import Hobbies from './pages/Hobbies';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Footer from './partials/Footer';
import Header from './partials/Header';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className='app-container'>
      <Header logState={isLoggedIn} />

      <div className='app-body'>
        {/* Routes Start */}

        <Routes>
          {/* About Page and Home Page goes to About page */}
          <Route path='/' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />

          <Route path='/blockbuster' element={<BlockBuster />} />

          <Route path='/about' element={<About />} />

          <Route path='/hobbies' element={<Hobbies />} />

          <Route path='/login' element={<Login loginState={setLoggedIn} />} />
        </Routes>
        {/* Routes End */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
