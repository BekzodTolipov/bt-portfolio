import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Footer from './partials/Footer';
import Header from './partials/Header';

function App() {
  return (
    <div className='app-container'>
      <Header />

      <div className='app-body'>
        {/* Routes Start */}

        <Routes>
          {/* About Page and Home Page goes to About page */}
          <Route path='/' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />

          <Route path='/about' element={<About />} />

          <Route path='/hobbies' element={<Hobbies />} />
        </Routes>
        {/* Routes End */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
