import React, { useEffect, useState } from 'react';
import { CreateNavLink, NavList } from '../helper/NavHelper';

import './header.css';

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(props.logState);
  let linkList = NavList(isLoggedIn, props.setLogState);

  useEffect(() => {
    setIsLoggedIn(props.logState);
  }, [props.logState]);

  const _handleCollapse = () => {
    props.setShow(!props.isShow);
  };

  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-custom navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            BT
          </a>
          <button
            className={
              !props.isShow
                ? 'navbar-toggler ml-auto custom-toggler collapsed'
                : 'navbar-toggler ml-auto custom-toggler'
            }
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded={props.isShow}
            aria-label='Toggle navigation'
            onClick={_handleCollapse}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={
              props.isShow
                ? 'collapse navbar-collapse show'
                : 'collapse navbar-collapse'
            }
            id='navbarNav'
          >
            <ul className='navbar-nav ms-auto'>
              {linkList.map((link, index) => {
                return link.isDisplay && CreateNavLink(link, index);
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
