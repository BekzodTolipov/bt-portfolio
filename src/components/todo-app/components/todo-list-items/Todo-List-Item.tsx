import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../helper/connection/http';
import { TodoListInterface } from '../interface/Todo-Interface';
import './todo-list-item.css';

const TodoListItems = (props) => {
  const [currentTodo, setCurrentTodo] = useState(props.pickedTodo.data);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    setCurrentTodo(props.pickedTodo.data);
  }, [props.pickedTodo.data]);

  // Save new item into current todo list
  const saveItem = async (event) => {
    try {
      const response = await axios.post(baseUrl + 'todo/todo-list', {
        listId: currentTodo && currentTodo._id,
        itemName,
      });

      if (response.status === 200) {
        let updatedData = { ...currentTodo };

        console.log(response.data);

        updatedData.items = response.data;
        setCurrentTodo(updatedData);
        setItemName('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (event) => {
    const deleteItemObj = {
      data: {
        itemId: event.target.value,
        listId: currentTodo && currentTodo._id,
      },
    };

    try {
      const response = await axios.delete(
        baseUrl + 'todo/todo-list',
        deleteItemObj
      );
      if (response.status === 200) {
        const itemsAfterDelete = currentTodo?.items.filter(
          (item) => item._id !== event.target.value
        );
        console.log(currentTodo);
        const afterUpdate: TodoListInterface = {
          _id: currentTodo?._id,
          items: itemsAfterDelete ? itemsAfterDelete : [],
          name: currentTodo?.name!,
        };
        setCurrentTodo(afterUpdate);
        setItemName('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentTodo && (
        <div className='todo-container'>
          {props.isLoading && <h1>Loading...</h1>}

          {!props.isLoading && (
            <div key={currentTodo._id}>
              <div className='box' id='heading'>
                <h1>
                  {currentTodo.name}
                  <button
                    onClick={() => {
                      props.pickedTodo._callback(currentTodo._id);
                    }}
                  >
                    -
                  </button>
                </h1>
              </div>

              <div className='box'>
                {currentTodo.items.map((item) => {
                  return (
                    <FormControl
                      key={item._id}
                      className='item-checkbox'
                      sx={{ padding: 1 }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{
                                '&.Mui-checked': {
                                  color: pink[600],
                                },
                              }}
                              className='input-checkbox'
                              value={item._id}
                              onChange={deleteItem}
                            />
                          }
                          label={<p className='todo-paragraph'>{item.name}</p>}
                        />
                      </FormGroup>
                    </FormControl>
                  );
                })}

                <div className='item'>
                  <input
                    placeholder='New Item'
                    type='text'
                    name='new_todo_item'
                    onChange={(e) => {
                      setItemName(e.target.value);
                    }}
                  />
                  <button onClick={saveItem} name='list'>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TodoListItems;
