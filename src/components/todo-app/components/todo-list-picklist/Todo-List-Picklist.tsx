import { Button, Grid, Menu, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../helper/connection/http';
import { TodoListInterface } from '../interface/Todo-Interface';
import './todo-list-picklist.css';

const TodoPicklist = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const fetchTodoList = async () => {
      props.setLoading(true);
      const todoListFetched = await axios.get(baseUrl + 'todo/todo-list');
      setTodoList(todoListFetched.data);
      props.setLoading(false);
    };

    fetchTodoList();
  }, []);

  const open = Boolean(anchorEl);
  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (list: TodoListInterface) => {
    setAnchorEl(null);
  };

  const _handleSaveNewTodo = async (event) => {
    try {
      const response = await axios.post(baseUrl + 'todo/', {
        newTodoListName: newTodo,
      });

      if (response.status === 200) {
        setTodoList(response.data);
        let pickAddedTodo = response.data.filter((todo: TodoListInterface) => {
          return todo.name === newTodo;
        });

        props.setPickedTodo({
          data: pickAddedTodo[0],
          _callback: _callbackToDelete,
        });
        setNewTodo('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pickTodo = (list: TodoListInterface) => {
    props.setPickedTodo({
      data: list,
      _callback: _callbackToDelete,
    });
    setAnchorEl(null);
  };

  const _handleTextField = (e) => {
    setNewTodo(e.target.value);
  };

  const _callbackToDelete = async (id: string) => {
    const deleteListObj = {
      data: {
        listId: id,
      },
    };

    try {
      const response = await axios.delete(baseUrl + 'todo/', deleteListObj);
      if (response.status === 200) {
        props.setPickedTodo({
          data: null,
        });

        const updatedList = todoList.filter((todo: TodoListInterface) => {
          return todo._id !== id;
        });

        setTodoList(updatedList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      _handleSaveNewTodo(e);
    }
  };

  return (
    <div className='picklist-menu'>
      <Grid container alignItems='center' spacing={2} columns={1}>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <Button
            id='dropdown-menu-btn'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleDropdownClick}
          >
            Todo List
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <TextField
            inputProps={{
              style: {
                backgroundColor: 'rgba(28, 138, 138, 0.3)',
                color: '#ffff',
              },
            }}
            InputLabelProps={{
              style: { color: '#fff', fontSize: '20px' },
            }}
            fullWidth
            id='new-list-field'
            label='New List'
            variant='standard'
            onKeyDown={_handleEnterKey}
            onChange={_handleTextField}
            value={newTodo}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <Button
            sx={{ width: '100%' }}
            variant='contained'
            color='success'
            onClick={_handleSaveNewTodo}
          >
            Add New Todo
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleDropdownClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {todoList.map((list: TodoListInterface, index) => {
              return (
                <MenuItem
                  key={list._id}
                  onClick={() => {
                    pickTodo(list);
                  }}
                >
                  {list.name}
                </MenuItem>
              );
            })}
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoPicklist;
