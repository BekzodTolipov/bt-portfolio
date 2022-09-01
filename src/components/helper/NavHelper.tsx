import React from 'react';
import { Link } from 'react-router-dom';

function NavList(isLoggedIn: boolean) {
  return [
    {
      name: 'About',
      subList: [],
      isDisplay: false,
    },
    {
      name: 'Projects',
      subList: ['Todo-App', 'Chess-Game'],
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
    },
    {
      name: 'Login',
      subList: [],
      isDisplay: !isLoggedIn,
    },
  ];
}

function CreateNavLink(link, index: any) {
  function withoutSubList() {
    return (
      <li key={index} className='nav-item'>
        <Link
          className={index === 0 ? 'nav-link active' : 'nav-link'}
          aria-current='page'
          to={`/${link.name.toLowerCase()}`}
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
        <ul className='dropdown-menu' aria-labelledby={link.name + 'Dropdown'}>
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

export { NavList, CreateNavLink };
