import React from 'react';
import { Link } from 'react-router-dom';

function NavList(isLoggedIn: boolean, logoutProcess) {
  return [
    {
      name: 'Work',
      link: 'projects',
      class: 'nav-link',
      subList: [],
      isDisplay: true,
    },
    {
      name: 'Play',
      link: 'projects',
      class: 'nav-link',
      subList: ['Todo-App'],
      isDisplay: true,
    },
    {
      name: 'About',
      link: 'about',
      class: 'nav-link',
      subList: [],
      isDisplay: true,
    },
    {
      name: 'Hobbies',
      link: 'hobbies',
      class: 'nav-link',
      subList: [],
      isDisplay: false,
    },
    {
      name: 'Support',
      link: 'support',
      class: 'nav-link',
      subList: [],
      isDisplay: isLoggedIn,
    },
    {
      name: 'Logout',
      link: 'logout',
      class: 'nav-link login-btn',
      subList: [],
      isDisplay: isLoggedIn,
      onClick: logoutProcess,
    },
    {
      name: 'Login',
      link: 'login',
      class: 'nav-link login-btn',
      subList: [],
      isDisplay: !isLoggedIn,
    },
  ];
}

function CreateNavLink(link, index: any, _handleCollapse) {
  function withoutSubList() {
    return (
      <li
        onClick={() => {
          if (link.onClick) {
            localStorage.removeItem('user');
            link.onClick(false);
          }
          _handleCollapse();
        }}
        key={index}
        className='nav-item'
      >
        <Link
          className={index === 0 ? link.class + ' active' : link.class}
          aria-current='page'
          to={link.link}
        >
          {link.name}
        </Link>
      </li>
    );
  }

  function withSubList() {
    return (
      <li key={index} className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          id={link.name + 'Dropdown'}
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          href='/#'
        >
          {link.name}
        </a>
        <ul
          className='dropdown-menu right-aligned'
          aria-labelledby={link.name + 'Dropdown'}
        >
          {link.subList.map((sub, index) => {
            return (
              <li key={link.name + index} onClick={_handleCollapse}>
                <Link className='dropdown-item' to={`/${sub.toLowerCase()}`}>
                  {sub}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return link.subList.length === 0 ? withoutSubList() : withSubList();
}

export { NavList, CreateNavLink };
