import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChessApp from './chess-app/Chess-App';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Footer from './partials/Footer';
import Header from './partials/Header';
import TodoApp from './todo-app/TodoApp';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isShow, setShow] = useState(false);

  return (
    <div className='app-container'>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
      >
        <Header logState={isLoggedIn} isShow={isShow} setShow={setShow} />
      </OutsideClickHandler>

      <div className='app-body'>
        {/* Routes Start */}

        <Routes>
          {/* About Page and Home Page goes to About page */}
          <Route path='/' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />

          {/* Projects */}
          <Route path='/todo-app' element={<TodoApp />} />
          <Route path='/chess-game' element={<ChessApp />} />

          {/* TODO: need to figure out pagination before releasing */}
          {/* <Route path='/blockbuster' element={<BlockBuster />} /> */}

          <Route path='/about' element={<About />} />

          <Route path='/hobbies' element={<Hobbies />} />

          {!isLoggedIn && (
            <Route
              path='/login'
              element={<Login setLoginState={setLoggedIn} />}
            />
          )}
        </Routes>
        {/* Routes End */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
