import React from 'react';
import './css/projects.css';

export default function Projects() {
  return (
    <div className='project-container'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Project Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Operating System Simulator ( C )</td>
            <td>
              <ul>
                <li>
                  Designed and implemented modules of a generic OS using system
                  calls such as fork, exec, shared memory, message queues and
                  semaphores
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
            <td>Listener with Raspberry Pi ( Python )</td>
            <td>
              <ul>
                <li>
                  Demonstrated it is possible to run open source in Raspberry Pi
                  locally without being connected to the internet and be able to
                  recognize and count specified words
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>FRESH ( MERN )</td>
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
            <td>PhotoShare ( MERN )</td>
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
            <td>Simon Says ( Kotlin )</td>
            <td>
              <ul>
                <li>
                  Replicated the "Simon Says" game by practicing to create three
                  different pages and set up transition between to keep
                  consistency in tracking scores of the player locally
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Scanner ( C++ )</td>
            <td>
              <ul>
                <li>
                  This project was designed to read the given file and tokenize
                  it based on the conditions they satisfied
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
  );
}
