import React, { useState } from 'react';
import ToDoForm from '../ToDoForm';
import ToDoListPr from '../ToDoListPr';

const ToDo = () => {
    const [toDoList, setToDoList] = useState([])
    const addToDo = async(textToDo) => {
        const newToDo = {
            text: textToDo,
            isDone: false,
            id: Date.now()
        }
       setToDoList([...toDoList,newToDo])
    }
    return (
        <>
            <ToDoForm addToDo={addToDo}/>
            <ToDoListPr toDoList={toDoList}/>
        </>
    );
}

export default ToDo;
