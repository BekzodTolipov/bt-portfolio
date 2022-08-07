import React from 'react';
import './css/projects.css';

export default function Projects() {
  return (
    <div>
      <div className='project-container'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th className='project-header'>Projects</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href='https://github.com/BekzodTolipov/OS'
                  target='_blank'
                  rel='noreferrer'
                >
                  Operating System Simulator ( C )
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    Designed and implemented modules of a generic OS using
                    system calls such as fork, exec, shared memory, message
                    queues and semaphores
                  </li>
                  <li>
                    Goal of the project was to show how OS managed inter-process
                    communications, process scheduling, resource management and
                    memory management
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <a
                  href='https://github.com/BekzodTolipov/JalapenoHotties'
                  target='_blank'
                  rel='noreferrer'
                >
                  Listener with Raspberry Pi ( Python )
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    Demonstrated it is possible to run open source in Raspberry
                    Pi locally without being connected to the internet and be
                    able to recognize and count specified words
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <a
                  href='https://github.com/zegster/fresh'
                  target='_blank'
                  rel='noreferrer'
                >
                  FRESH ( MERN )
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    The goal of the project was to find solution to reduce food
                    waste
                  </li>
                  <li>
                    As a group we found a way to ease consumers day-to-day food
                    recipe challenges where they can choose from the list of
                    recipes offered and order the ingredients needed
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <a
                  href='https://github.com/BekzodTolipov/PhotoShare---MERN'
                  target='_blank'
                  rel='noreferrer'
                >
                  PhotoShare ( MERN )
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    Created an environment for users to share places with other
                    users, the main goal being to learn React, Express, NodeJS,
                    and MongoDB
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <a
                  href='https://github.com/BekzodTolipov/Simon-Game'
                  target='_blank'
                  rel='noreferrer'
                >
                  Simon Says ( Kotlin )
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    Replicated the "Simon Says" game by practicing to create
                    three different pages and set up transition between to keep
                    consistency in tracking scores of the player locally
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <a
                  href='https://github.com/BekzodTolipov/Program-Translation'
                  target='_blank'
                  rel='noreferrer'
                >
                  Scanner ( C++ )
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    This project was designed to read the given file and
                    tokenize it based on the conditions they satisfied
                  </li>
                  <li>
                    Produced project that will be part of the compiler that I am
                    building
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='project-container'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th className='project-header'>Education</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>University of Missouri - STL</td>
              <td>
                <ul>
                  <li>Bachelor Of Science - Computer Science (3.74)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>Truman State University</td>
              <td>
                <ul>
                  <li>Bachelor Of Science - Computer Science (Transferred)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>Solbridge International School of Business</td>
              <td>
                <ul>
                  <li>Bachelor Degree in Finance (Degree Switch)</li>
                  <ul>
                    <li>
                      I went to Solbrige in Dejeon in South Korea, and after 3
                      years of studying, I have planned to transfer my final
                      year of school to Truman State in United State where I
                      ended up switching my degree to computer science
                    </li>
                  </ul>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
