import React from 'react';

const TodoList = (props) => {
    return(
        <ul className='Todos'>
          {props.todos.map((todo, index) => {
            return(
              <li key={index}>
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
          <li className='Endblock'>Created by Serey Morm</li>
        </ul>
    )
}

export default TodoList;