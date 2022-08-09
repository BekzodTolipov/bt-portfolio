import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './css/projects.css';

export default function Projects() {
  const apiLink = 'https://hidden-tundra-97787.herokuapp.com';
  const [data, setData] = useState({
    projects: [],
    education: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const projects = await axios.get(apiLink + '/projects');
      const education = await axios.get(apiLink + '/education');

      setData({
        projects: projects.data,
        education: education.data,
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='project-container'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th className='project-header'>Projects</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.projects.map((project) => {
              return (
                <tr key={project._id}>
                  <td>
                    <a
                      href='https://github.com/BekzodTolipov/OS'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {project.title}
                    </a>
                  </td>
                  <td>
                    <ul>
                      {project.content.map((bodyContent, index) => {
                        return <li key={project._id + index}>{bodyContent}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
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
            {data.education.map((ed) => {
              return (
                <tr key={ed._id}>
                  <td>{ed.title}</td>
                  <td>
                    <ul>
                      {ed.content.map((edContent, index) => {
                        return <li key={ed._id + index}>{edContent}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
