import React from 'react';
import '../List.css';

function List({ todos, deleteTodo, updateDoneState }) {

    const todoDone = (event) => {
        const card = document.getElementById(event.target.id)
        
        if(event.target.checked) {
            card.classList.remove('not-done')
            card.classList.add('done')
            updateDoneState(event.target.id)       
        } else {
            card.classList.remove('done')
            card.classList.add('not-done')
            updateDoneState(event.target.id)
        }
    }

    const red = {
        color: 'red'
    }

    const deleteAtodo = (event) => {
        deleteTodo(parseInt(event.target.id, 10))
    }
    const todoCards = todos.map(todo => {
        return (
            <div className={`card mt-4 ${todo.done ? 'done' : 'not-done'}`} id={todo.id} key={todo.id}>
                <div className="card-body">
                    { todo.text } <div className="float-right"><i className="fa fa-trash fa-2x mr-3" id={ todo.id } style={ red } onClick={ deleteAtodo } aria-hidden="true"></i><input type="checkbox" onChange={ todoDone } className="large" id={todo.id}></input></div>
                </div>
            </div>
        )
    })
    //console.table(todoCards)
    return (
        <div className="container mt-4">
           { todoCards }
        </div>
    )
}

export default List