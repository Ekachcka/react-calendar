import React from 'react';

const ToDoListPr = ({toDoList}) => {
    return (
        <article>
            <h1>ToDo List:</h1>
            <ul>
                {toDoList.map((toDo)=>(
                    <li key={toDo.id}>
                        <p>{toDo.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default ToDoListPr;
