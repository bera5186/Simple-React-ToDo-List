import React from 'react';


function Add({ todos, addTodo }) {

    var todo = {
        id: todos.length + 1,
        done: false,
        text: null
    }

    const submit = (event) => {
        event.preventDefault()
        addTodo(todo)
        event.target.reset()
    }

    const handleChange = (event) => {
        todo.text = event.target.value
    }

    return (
        <div className="mt-5">
            <form onSubmit={ submit } autoComplete="off">
                <div className="row">
                    <div className="col-md-9">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter a New To-Do" id="text" onChange={ handleChange }></input>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-success btn-block">Add To-Do</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Add