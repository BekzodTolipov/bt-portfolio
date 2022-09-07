import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../helper/connection/http';
import { getStorageValue, setToStorage } from '../../../helper/LocalStorage';
import './projects.css';

export default function Projects() {
  const [data, setData] = useState(() => {
    return getStorageValue('projects', {
      projects: [],
      education: [],
      isFetched: false,
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      const dataStorage = getStorageValue('projects', null);

      if (dataStorage === null) {
        const projects = await axios.get(baseUrl + '/projects');
        const education = await axios.get(baseUrl + '/educations');

        setToStorage(
          'projects',
          JSON.stringify({
            projects: projects.data,
            education: education.data,
            isFetched: true,
          })
        );

        setData({
          projects: projects.data,
          education: education.data,
          isFetched: true,
        });
      }
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
            {data.projects.map((project: any) => {
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
            {data.education.map((ed: any) => {
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
