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
                Hi there! My name is Bekzod “Bek” Tolipov and I am a developer
                based in Austin, Texas. I have a passion for learning and am
                experienced with working on projects across a variety of
                industries. From transportation to healthcare and everything in
                between, I have played a key role in developing projects and
                concepts into real world assets. Angular, Spring Boot,
                Salesforce, and AWS are just the tip of the iceberg when it
                comes to what I can do. I have assisted in building companies
                from the ground up, partnered with strategic stakeholders such
                as Walmart, UPS, and Fedex, in addition to having implemented
                flexible solutions across platforms.
              </p>
              {/* <p>
                <a className='icons' href='https://github.com/BekzodTolipov'>
                  <i
                    className='fa-brands fa-github fa-2x'
                    style={{ color: 'black' }}
                  ></i>
                </a>

                <a
                  className='icons'
                  href='https://www.linkedin.com/in/bekzod-tolipov-225913119/'
                >
                  <i
                    className='fa-brands fa-linkedin fa-2x'
                    style={{ color: '#0077B5' }}
                  ></i>
                </a>
              </p> */}

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
                  <a href='mailto:btolipov211@outlook.com'>Send Email</a>
                  {/* <div className='connect-form'>
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
                  </div> */}
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
