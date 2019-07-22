import React, { useState } from 'react';

function Todo({ todo, index }) {
    return (
        <div className="todo">
            {todo.text}
        </div>
    )
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="howareu"
            >

            </input>
        </form>
    )
}

export default function LoginPage() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'meet friend',
            isCompleted: false
        },
        {
            text: 'build really cool app',
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
    }

    return (
        <div>
            <div className="todo-list">
                {todos.map((todo, index) => {
                    return <Todo key={index} todo={todo}></Todo>
                })}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}