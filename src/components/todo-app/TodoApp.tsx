import React, { useState } from 'react';
import TodoListItems from './components/todo-list-items/Todo-List-Item';
import TodoPicklist from './components/todo-list-picklist/Todo-List-Picklist';
import './todoapp.css';

export default function TodoApp(props) {
  const [currentTodo, setCurrentTodo] = useState({
    _callback: (id) => {},
    data: null,
  });
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='todo-app-container'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='title'>ToDo App</h3>
        </div>
        <div className='todo-app-content col-12'>
          <div className='row'>
            <div className='todo-picklist col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <TodoPicklist
                setPickedTodo={setCurrentTodo}
                setLoading={setLoading}
                isAuth={props.isAuth}
              />
            </div>

            <div className='todo-items col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              {currentTodo.data && (
                <TodoListItems
                  pickedTodo={currentTodo}
                  isLoading={isLoading}
                  isAuth={props.isAuth}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
