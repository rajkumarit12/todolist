import React, { useState, useEffect } from "react";
// import TodoList from '../Components/TodoList'
import { getList, add } from '../api';




function TodoList() {

    let [value, setValue] = useState('');
    let [list, setList] = useState([]);
    let [completedList, setCompletedList] = useState([]);
    let [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchList();
    });

    function fetchList() {
        getList().then((res) => {
            setList(res.list || [])
        });
    }

    function addTodoHandler() {
        setIsLoading(true);
        add(value).then(res => {
            getList().then((res) => {
                setList(res.list || []);
                setIsLoading(false);
            })
        })
    }

    function onclick(itemId) {
        if (completedList.includes(itemId)) {
            setCompletedList(completedList.filter(id => id !== itemId));
        } else {
            setCompletedList([...completedList, itemId]);
        }
    }

    function isComplete(itemId) {
        return completedList.includes(itemId);
    }


    return (
        <div className="container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={addTodoHandler} >Add</button>
            {/* <TodoList list={list} /> */}
            <h1>Todo - {list.length - completedList.length}</h1>
            <ul className="list">
                {list.map(({ itemId, displayText }) => {
                    return (
                        <li key={itemId} className={isComplete(itemId) ? 'completed-todo-item' : 'todo-item'} onClick={() => onclick(itemId)}>{displayText}</li>
                    )
                })}
            </ul>

        </div>

    )
}

export default TodoList;