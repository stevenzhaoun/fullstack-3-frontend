import { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState(['1', '2', '3', '4'])
    const [inputValue, setInputValue] = useState('')

    const handleAdd = () => {
        const newTodos = [...todos, inputValue] // spread operator
        setTodos(newTodos)
        setInputValue('')
    }
    console.log('todos', todos)
    return (
        <div>
            <h1>Todo</h1>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map(todo => {
                    return <li key={todo}>{todo}</li>
                })}
            </ul>
        </div>
    )
}