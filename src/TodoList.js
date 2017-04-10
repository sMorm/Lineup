import React from 'react';
import MediaQuery from 'react-media';

const TodoList = (props) => {
    return(
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
           ? ( 
        <ul className='Todos mobile'>
        {/*
            <li>
              <ul>
                <li>All</li>
                <li>Completed</li>
                <li>Removed</li>
              </ul>
            </li> */}
                {props.todos.map((todo, index) => {
                  return(
                    <li key={index} className="todo">
                      <button 
                        onClick={() => props.completeItem(index)}
                        className={
                          todo.isComplete
                          ? 'Complete-button completed'
                          : 'Complete-button incomplete'
                        }>
                      </button>
                      <div className={
                            todo.isComplete
                            ? 'Completed true'
                            : 'Completed false'
                        }>
                        <p>{todo.todo}</p>
                          <button 
                            onClick={() => props.removeItem(index)}
                            className='Remove-todo'>
                            X
                          </button>
                      </div>
                    </li>
                    )
                })}
                <li className='Endblock'>{props.todos.length} Tasks Listed</li>
              </ul>
        )

           : (
              <ul className='Todos'>
              {/*
                  <li className="options">
                    <button className="all">All</button>
                    <button className="completed">Complete</button>
                    <button className="incomplete">Incomplete</button>
                  </li>
                */}
                {props.todos.map((todo, index) => {
                  return(
                    <li key={index} className="todo">
                      <button 
                        onClick={() => props.completeItem(index)}
                        className={
                          todo.isComplete
                          ? 'Complete-button completed'
                          : 'Complete-button incomplete'
                        }>
                      </button>
                      <div className={
                            todo.isComplete
                            ? 'Completed true'
                            : 'Completed false'
                        }>
                        <p>{todo.todo}</p>
                          <button 
                            onClick={() => props.removeItem(index)}
                            className='Remove-todo'>
                            X
                          </button>
                      </div>
                    </li>
                    )
                })}
                <li className='Endblock'>{props.todos.length} Tasks Listed</li>
              </ul>
          )
         }
        </MediaQuery>
    )
}

export default TodoList;