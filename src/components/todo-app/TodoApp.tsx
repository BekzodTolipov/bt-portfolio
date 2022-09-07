import { Box, Grid } from '@mui/material';
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
    <Box className='todoAppBox' sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <TodoPicklist
            setPickedTodo={setCurrentTodo}
            setLoading={setLoading}
            isAuth={props.isAuth}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          {currentTodo.data && (
            <TodoListItems
              pickedTodo={currentTodo}
              isLoading={isLoading}
              isAuth={props.isAuth}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
