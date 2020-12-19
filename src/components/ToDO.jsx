import React, { useState } from 'react';
import { Button, Card, Divider } from 'antd';
import { ToDoitem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';

export const ToDO = () => {
    const [todos, setTodos] = useState([
        {id: 1, title:'todo 1', desc:'some description', checked: false},
        {id: 2, title:'todo 2', desc:'some cooler description', checked: false}
    ]);
    
    const [ids, setIds] = useState(10);

    const onCheck = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const todo = todos[index];

        todo.checked = !todo.checked;
        setTodos([...todos]);
    }

    const onRemove = (id) => {
        const index = todos.findIndex(todo => todo.id === id);

        todos.splice(index, 1);
        setTodos([...todos]);
    }

    const onSubmit = (title, desc) => {
      const todo = {
          id: ids,
          title,
          desc,
          checked: false
      };
      
      setTodos([...todos, todo]);
      setIds(ids + 1);
    }

    const renderItems = (todos) => {
        return (
            <ul className={'todo-list'}>
                { todos.map(todo => {
                    return <ToDoitem item={todo} onCheck={onCheck} onRemove={onRemove} />
                }) }
            </ul>
        )
    }

    const numberOfUnchecked = () => {
        let counter = 0;
        let i = todos.length;
        while (i--) {
            if (todos[i].checked === false) {
                counter++;
            } 
        }
        return counter;
    }

    const removeChecked = () => {
        let i = todos.length;
        while (i--) {
            if (todos[i].checked === true) {
                todos.splice(i,1)
            }
        }
        setTodos([...todos]);
    }

    return (
        <Card title={'My todo list'}>
            <ToDoForm onSubmit={onSubmit} />
            <Divider />
            {
               renderItems(todos)
            }
            <Divider />
            <p>Number of unchecked todos: <p className='todo-item'>{numberOfUnchecked()}</p></p>
            <Divider />
            <Button type='primary' danger='true' htmlType='primary' onClick={removeChecked}>Remove checked todos</Button>
        </Card>
    )
}