import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='fixed-bottom'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <p>Email</p>
          <a href='emailto:btolipov211@outlook.com'>btolipov211@outlook.com</a>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
              <p>Social</p>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-6'>
              <a className='icons' href='https://github.com/BekzodTolipov'>
                <i
                  className='fa-brands fa-github fa-2x'
                  style={{ color: 'black' }}
                ></i>
              </a>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-6'>
              <a
                className='icons'
                href='https://www.linkedin.com/in/bekzod-tolipov-225913119/'
              >
                <i
                  className='fa-brands fa-linkedin fa-2x'
                  style={{ color: '#0077B5' }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>Short about myself</div>
      </div>
    </footer>
  );
}

export default Footer;
