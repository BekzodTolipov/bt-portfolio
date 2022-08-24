import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { pink } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './todoapp.css';

const apiLink = 'https://hidden-tundra-97787.herokuapp.com/api/todo/todo-list';

interface TodoListInterface {
    name: string;
    items: [TodoItemsInterface];
    _id: any;
    children?: JSX.Element|JSX.Element[];
}

interface TodoItemsInterface {
    name: string;
    _id: any;
}

export default function TodoApp() {
    const[todoList, setTodoList] = useState([]);
    const[currentTodo, setCurrentTodo] = useState("");
    const[isLoading, setLoading] = useState(true);
    const[itemName, setItemName] = useState("")

    useEffect(() => {
        const fetchTodoList = async () => {
            setLoading(true);
            const todoListFetched = await axios.get(apiLink);
            setTodoList(todoListFetched.data);
            setCurrentTodo(todoListFetched.data[0]._id);
            setLoading(false);
        }

        fetchTodoList();
    }, [])

    const deleteItem = async (event) => {
        const itemData = event.target.value.split(' ');

        const deleteItemObj = {
            data: {
                itemId: itemData[0],
                listId: itemData[1]
            }
        }

        try {
            const response = await axios.delete(apiLink, deleteItemObj);
            if(response.status === 200) {
                const todoListFetched = await axios.get(apiLink);

                setTodoList(todoListFetched.data);
            }
        } catch (error) {
            console.log(error)
        }

    }


    const saveItem = async (event) => {
        try {
            const response = await axios.post(apiLink, {
                listId: currentTodo,
                itemName
            })

            if(response.status === 200) {
                const todoListFetched = await axios.get(apiLink);

                setTodoList(todoListFetched.data);
            }
        } catch (error) {
            console.log(error)
        }
    }


    return <>
        <div className="todo-container">
            {isLoading && <h1>Loading...</h1>} 
                
            {!isLoading && todoList.map((todo: TodoListInterface, index) => {
                    return <div key={todo._id}>
                                <div className="box" id="heading">
                                    <h1>{todo.name}</h1>
                                </div>
                                
                                <div className="box">
                                    {
                                        todo.items.map(item => { 
                                            return (
                                                <FormControl key={item._id} className="item-checkbox"
                                                    sx={{padding: 1}}
                                                >
                                                    <FormGroup>
                                                        <FormControlLabel
                                                        
                                                        control={
                                                                    <Checkbox sx={{
                                                                        '&.Mui-checked': {
                                                                          color: pink[600],
                                                                        },
                                                                      }} className="input-checkbox" value={item._id + ' ' + todo._id} onChange={deleteItem}/>
                                                                }
                                                                label={<p className="todo-paragraph">{item.name}</p>}
                                                        />
                                                    </FormGroup>
                                                </FormControl>
                                            )
                                        })
                                    }

                                    <div className="item">
                                        <input placeholder="New Item" type="text" name="new_todo_item" onChange={(e) => {setItemName(e.target.value)}}/>
                                        <button onClick={saveItem} name="list" value={todo._id}>+</button>
                                    </div>

                                </div>
                            </div>
                })}
            
        </div>
    </>
}