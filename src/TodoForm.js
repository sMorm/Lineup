import React from 'react';
import MediaQuery from 'react-media';
const TodoForm = (props) => {
    return(
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
           ?( 
            <form className="App-form mobile" onSubmit={props.onSubmit}>
              <input
              onSubmit={props.onSubmit}
              type="text"
              placeholder="Click to add a task"
              onChange={props.onChange}
              value={props.value}
              maxLength="30"
              required/>
            </form>
            )
           :(
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
            )
          }
      </MediaQuery>
            )
}
export default TodoForm;