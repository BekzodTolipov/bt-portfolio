export const getTodoListUri = (loginState: boolean) => {
  if (loginState) {
    return 'todo/todo-list';
  }

  return 'todo/general/todo-list';
};

export const saveTodoListUri = (loginState: boolean) => {
  if (loginState) {
    return 'todo/';
  }

  return 'todo/general';
};

export const deleteTodoListUri = (loginState: boolean) => {
  if (loginState) {
    return 'todo/';
  }

  return 'todo/general';
};

export const saveItemToListUri = (loginState: boolean) => {
  if (loginState) {
    return 'todo/todo-list';
  }

  return 'todo/general/todo-list';
};

export const deleteItemFromListUri = (loginState: boolean) => {
  if (loginState) {
    return 'todo/todo-list';
  }

  return 'todo/general/todo-list';
};

export const verifyAccessTokenUri = () => {
  return 'users/user/verifyToken';
};
