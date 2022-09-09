import React from 'react';
import { Link } from 'react-router-dom';

function NavList(isLoggedIn: boolean, logoutProcess) {
  return [
    {
      name: 'About',
      subList: [],
      isDisplay: false,
    },
    {
      name: 'Projects',
      subList: ['Todo-App'],
      isDisplay: true,
    },
    {
      name: 'Hobbies',
      subList: [],
      isDisplay: false,
    },

    {
      name: 'Blockbuster',
      subList: [],
      isDisplay: false,
    },

    {
      name: 'Logout',
      subList: [],
      isDisplay: isLoggedIn,
      onClick: logoutProcess,
    },
    {
      name: 'Login',
      subList: [],
      isDisplay: !isLoggedIn,
    },
    {
      name: 'Support',
      subList: [],
      isDisplay: isLoggedIn,
    },
  ];
}

function CreateNavLink(link, index: any) {
  function withoutSubList() {
    return (
      <li
        onClick={() => {
          if (link.onClick) {
            localStorage.removeItem('user');
            link.onClick(false);
          }
        }}
        key={index}
        className='nav-item'
      >
        <Link
          className={index === 0 ? 'nav-link active' : 'nav-link'}
          aria-current='page'
          to={getLink(link.name)}
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
              <li key={link.name + index}>
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

function getLink(name: string) {
  if (name.toLowerCase() === 'logout') {
    return '/';
  }

  return `/${name.toLowerCase()}`;
}

export { NavList, CreateNavLink };
