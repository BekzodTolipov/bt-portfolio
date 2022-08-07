import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-custom navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            BT
          </a>
          <button
            className='navbar-toggler ml-auto custom-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/about'
                >
                  About
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/projects'>
                  Projects
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/hobbies'>
                  Hobbies
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/references'>
                  References
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/resume'>
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
