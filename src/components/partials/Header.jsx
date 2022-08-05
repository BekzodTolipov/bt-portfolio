import React from 'react';
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
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='/about'
                >
                  About
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/projects'>
                  Projects
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/hobbies'>
                  Hobbies
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/references'>
                  References
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/resume'>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
