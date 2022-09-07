import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { isAuthenticated } from './helper/connection/authentication';
import About from './pages/components/about/About';
import Hobbies from './pages/components/hobbies/Hobbies';
import Login from './pages/components/login/Login';
import ResetPassword from './pages/components/password-reset/Reset-Password';
import Projects from './pages/components/project-education/Projects';
import Footer from './partials/Footer';
import Header from './partials/Header';
import TodoApp from './todo-app/TodoApp';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const checkLocal = async () => {
      const isAuth = await isAuthenticated();
      setLoggedIn(isAuth);
    };

    checkLocal();
  });

  return (
    <div className='app-container'>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
      >
        <Header
          setLogState={setLoggedIn}
          isAuth={isLoggedIn}
          isShow={isShow}
          setShow={setShow}
        />
      </OutsideClickHandler>

      <div className='app-body'>
        {/* Routes Start */}

        <Routes>
          {/* About Page and Home Page goes to About page */}
          <Route path='/' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />

          {/* Projects */}
          <Route path='/todo-app' element={<TodoApp isAuth={isLoggedIn} />} />
          {/* <Route path='/chess-game' element={<ChessApp />} /> */}

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

          <Route path='/reset-password/:token' element={<ResetPassword />} />
        </Routes>
        {/* Routes End */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
