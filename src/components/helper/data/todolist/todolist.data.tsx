import axios from 'axios';
import {
  deleteItemFromListUri,
  deleteTodoListUri,
  getTodoListUri,
  saveItemToListUri,
  saveTodoListUri,
} from '../../connection/api-links';
import { baseUrl } from '../../connection/http';

export const getTodoList = async (isAuth) => {
  try {
    const res = await axios.get(baseUrl + getTodoListUri(isAuth), {
      headers: getHeaders(isAuth),
    });

    return res;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};

export const saveTodoList = async (isAuth, newTodo) => {
  try {
    const res = await axios.post(
      baseUrl + saveTodoListUri(isAuth),
      {
        newTodoListName: newTodo,
      },
      {
        headers: getHeaders(isAuth),
      }
    );

    return res;
  } catch (error) {
    return { status: 400, data: [] };
  }
};

export const deleteTodoList = async (isAuth, id) => {
  try {
    const response = await axios.delete(baseUrl + deleteTodoListUri(isAuth), {
      headers: getHeaders(isAuth),
      data: { listId: id },
    });

    return response;
  } catch (error) {
    return { status: 400 };
  }
};

export const saveListItem = async (isAuth, currentTodo, itemName) => {
  try {
    const response = await axios.post(
      baseUrl + saveItemToListUri(isAuth),
      {
        listId: currentTodo && currentTodo._id,
        itemName,
      },
      {
        headers: getHeaders(isAuth),
      }
    );

    return response;
  } catch (error) {
    return { status: 400, data: [] };
  }
};

export const deleteListItem = async (isAuth, itemId, listId) => {
  try {
    const response = await axios.delete(
      baseUrl + deleteItemFromListUri(isAuth),
      {
        headers: getHeaders(isAuth),
        data: { itemId: itemId, listId: listId },
      }
    );

    return response;
  } catch (error) {
    return { status: 400 };
  }
};

const getHeaders = (isAuth) => {
  let headers = {
    Authorization: '',
  };

  if (isAuth) {
    const user = localStorage.getItem('user');
    if (user) {
      const userJson = JSON.parse(user);
      headers.Authorization = userJson.accessToken;
    }
  }

  return headers;
};
