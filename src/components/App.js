import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import References from './pages/References';
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
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/hobbies' element={<Hobbies />} />

          <Route path='/references' element={<References />} />
        </Routes>
        {/* Routes End */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
