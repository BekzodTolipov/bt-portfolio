import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header(props) {
  //'About', 'Projects', 'Hobbies', 'Login'
  const linkList = props.logState
    ? ['About', 'Projects', 'Hobbies', 'Logout', 'Blockbuster']
    : ['Projects', 'Login', 'Blockbuster'];

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
              {linkList.map((link, index) => {
                return (
                  <li key={index} className='nav-item'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      to={`/${link.toLowerCase()}`}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}

              <li className='nav-item'>
                <a
                  className='nav-link'
                  href={process.env.PUBLIC_URL + '/files/Resume-2022.docx'}
                  download='Resume-2022.docx'
                >
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
