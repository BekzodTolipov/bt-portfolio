
interface TodoListInterface {
    name: string;
    items: TodoItemsInterface[];
    _id: any;
    children?: JSX.Element|JSX.Element[];
}

interface TodoItemsInterface {
    name: string;
    _id: any;
}

export { TodoListInterface, TodoItemsInterface };
