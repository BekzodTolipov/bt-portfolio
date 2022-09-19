import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className='about-container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h3 className='title'>About</h3>
        </div>
        <div className='about-content col-sm-8'>
          <div className='row'>
            <div className='col-sm-12'>
              <p>
                Hi, I am Bekzod Tolipov and I want to thank you for taking you
                time to visit my portfolio. I earned my Bachelor degree in
                Computer Science from University of Missouri - STL in May, 2020.
                I have a broad understanding of core principles of programming
                and am still excited to explore new technologies. You can find
                my GitHub variety repositories in the Work page of this website
                where I have demonstrated projects in C, C++, Java, and Python.
                Therefore, I have worked in a team of brilliant developers to
                build Full Stack applications using different frameworks. I
                can't wait to connect with you and get to know each other.
              </p>

              <a
                className='resume-link'
                href={process.env.PUBLIC_URL + '/files/Resume-2022.docx'}
                download='Resume-2022.docx'
              >
                Click here to see my full resume.
              </a>
            </div>
            <div className='about-content col-sm-12'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h3 className='title'>Let's Connect</h3>
                </div>

                <div className='col-sm-12'>
                  <div className='connect-form'>
                    <div className='row'>
                      <div className='col-sm-3'>
                        <input
                          className='connect-input'
                          type='text'
                          placeholder='First Name'
                        />
                      </div>
                      <div className='col-sm-3'>
                        <input
                          className='connect-input'
                          type='text'
                          placeholder='Last Name'
                        />
                      </div>
                      <div className='col-sm-3'>
                        <input
                          className='connect-input'
                          type='text'
                          placeholder='Email'
                        />
                      </div>
                      <div className='col-sm-3'>
                        <input
                          className='connect-input'
                          type='text'
                          placeholder='Reason'
                        />
                      </div>

                      <div className='margin-reset col-sm-12'>
                        <textarea className='message' rows={1} />
                      </div>
                      <div className='margin-reset col-sm-12'>
                        <button className='btn connect-btn'>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-content col-md-4'>
          <img
            className='headshot'
            src={process.env.PUBLIC_URL + '/images/headshot.jpg'}
            alt='Headshot'
          />
        </div>
      </div>
    </div>
  );
}
