import React from 'react';

const TodoForm = (props) => {
    return(

        <div>
            <form className="App-form" onSubmit={props.onSubmit}>
              <input
              onSubmit={props.onSubmit}
              type="text"
              placeholder="Click to add a task"
              onChange={props.onChange}
              value={props.value}
              maxLength="30"
              required/>
            </form>
        </div>

    );
}
export default TodoForm;