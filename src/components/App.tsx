import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { isAuthenticated } from './helper/connection/authentication';
import About from './pages/components/about/About';
import PurchaseConfirmation from './pages/components/donation/PurchaseConfirmation';
import Support from './pages/components/donation/Support';
import Login from './pages/components/login/Login';
import ResetPassword from './pages/components/password-reset/Reset-Password';
import Projects from './pages/components/project-education/Projects';
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
          {/* About  */}
          <Route path='/' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />

          {/* Todo App */}
          <Route path='/todo-app' element={<TodoApp isAuth={isLoggedIn} />} />

          {isLoggedIn && <Route path='/support' element={<Support />} />}

          <Route
            path='/stripe-checkout/purchaseResult=:purchaseResult'
            element={<PurchaseConfirmation />}
          />
          {/* <Route path='/chess-game' element={<ChessApp />} /> */}

          {/* TODO: need to figure out pagination before releasing */}
          {/* <Route path='/blockbuster' element={<BlockBuster />} /> */}

          <Route path='/about' element={<About />} />

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

      {/* <Footer /> */}
    </div>
  );
}

export default App;
